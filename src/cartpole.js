var Environment = require('./gym.js').Environment;

class CartPole extends Environment{
  
  constructor(){
    super();

    this.gravity = 9.8;
    this.massCart = 1.0;
    this.massPole = 0.1;
    this.totalMass = this.massCart + this.massPole;

    this.cartWidth = 0.2;
    this.cartHeight = 0.1;
    this.length = 0.5;
    this.poleMoment = this.massPole * this.length;
    this.forceMag = 10.0;
    this.tau = 0.02;

    this.xThreshold=2.4;
    this.thetaThreshold= 12/ 360* 2 * Math.PI;
    this.setRandomState();
  }

  setRandomState(){
    this.x = Math.random() - 0.5;
    this.xDot = (Math.random() - 0.5) * 1;

    this.theta = (Math.random() - 0.5) * 2 * ( 6/360*2*Math.PI);

    this.thetaDot = (Math.random() - 0.5) * 0.5;
  };


  getState(){
    return [this.x, this.xDot, this.theta, this.thetaDot];
  };

  step(action){
    const force = action > 0 ? this.forceMag : -this.forceMag;

    const cosTheta = Math.cos(this.theta);
    const sinTheta = Math.sin(this.theta);

    const temp = 
      (force + this.poleMoment * this.thetaDot * this.thetaDot * sinTheta)/
      this.totalMass;
    const thetaAcc = (this.gravity * sinTheta - cosTheta * temp) / 
      (this.length *
        (4/3 - this.massPole * cosTheta * cosTheta / this.totalMass));

    const xAcc = temp - this.poleMoment * thetaAcc * cosTheta / this.totalMass;

    this.x        += this.tau * this.xDot;
    this.xDot     += this.tau * xAcc;
    this.theta    += this.tau * this.thetaDot;
    this.thetaDot += this.tau * thetaAcc;
    this.state     = this.getState();
    return this.isDone();
  }

  isDone(){
    let done = this.x < -this.xThreshold || this.x > this.xThreshold ||
      this.theta < - this.thetaThreshold || this.theta > this.thetaThreshold;
    return done; 
  }

};


exports.CartPole = CartPole;

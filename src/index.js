var GYM = require('./gym.js');

Object.assign(module.exports, {
  "gym":{
    "Env": require('./gym.js').Environment,
    "CartPole": require('./cartpole.js').CartPole
  }
});


class Environment{
  constructor(){
    this.state = 0;
    this.action_space = [...Array(2).keys()]
    this.state_space  = 1;
  };
  step(action){
    return 0;
  };
  reset(){
    return this.state;
  }
};


module.exports.Environment = Environment;

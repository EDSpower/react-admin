import { observable , action , computed } from 'mobx';

class Golbal {
  @observable collped = false;
  @action 
  changeCollp = name => {
      this.collped = !this.collped
  }
  @computed get finishedTodos () {
    return  String( this.collped )
  }
}

const golbal = new Golbal();
export default golbal;
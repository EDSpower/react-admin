import {observable} from 'mobx';

class TestStore {
    // 被观察者
    @observable name; 
    constructor() {
        this.name = '浮云先生'
    }
}
const user = new TestStore() 
export default user
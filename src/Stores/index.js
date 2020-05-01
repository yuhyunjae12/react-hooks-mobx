import UsersStore from "./UserStroe/UserStroe";

// RootStore
class RootStore{
    constructor(){
        this.UsersStore = new UsersStore()
    }
}

export default RootStore
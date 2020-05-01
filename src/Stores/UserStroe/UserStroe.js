import { observable, action, computed } from "mobx";

export default class UsersStore{

    @observable loginCheck = false;
    @observable userName = 'name'

    constructor(root){
        this.root= root
    }

    @action
    login = () =>{
        this.loginCheck = true
    }

    @action
    logOut = () => {
        this.loginCheck = false
    }

    @action
    setUserName = (name) =>{
        this.userName = name
    }

    @computed
    get getLoginCheck (){
        return this.loginCheck
    }

    @computed
    get getUserName (){
        return this.userName
    }

}
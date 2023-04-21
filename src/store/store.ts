import { makeAutoObservable } from "mobx";
import IUser from "../models/IUser";
import UserService from "../services/UserService";

export default class Store {
  private user = {} as IUser
  private isAuth: boolean

  constructor() {
    makeAutoObservable(this, {}, {autoBind: true})
    this.isAuth = false
  }

  getUser() {
    return this.user
  }

  getIsAuth() {
    return this.isAuth
  }

  setUser(user: IUser) {
    this.user = user
  }

  setIsAuth(isAuth: boolean) {
    this.isAuth = isAuth
  }

  async register(email: string, username: string, password: string) {
    try {
      const response = await UserService.register({email, username, password})

      localStorage.setItem('token', response.data.token)
      this.setIsAuth(true)
      this.setUser(response.data.user)
    } catch(e) {
      console.log(e);
    }
  }

  async login(email: string, password: string) {
    try {
      const response = await UserService.login({email, password})
      
      localStorage.setItem('token', response.data.token)
      this.setIsAuth(true)
      this.setUser(response.data.user)
    } catch(e) {
      console.log(e);
    }
  }

  async validateToken() {
    try {
      const token = localStorage.getItem('token')
      if(token) {
        const response = await UserService.checkAuth({token})
        this.setIsAuth(response.data.isLoginned)
        this.setUser(response.data.user)
      }
    } catch(e) {
      console.log(e);
    }
  }

  logout() {
    localStorage.removeItem('token')
    this.setIsAuth(false)
    this.setUser({} as IUser)
  }
}
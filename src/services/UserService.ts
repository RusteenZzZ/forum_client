import { AxiosResponse } from "axios";

import api from "../axios"
import RegisterRequest from "../models/request/RegisterRequest"
import RegisterResponse from "../models/response/RegisterResponse";
import CheckAuthResponse from "../models/response/CheckAuthResponse";
import CheckAuthRequest from "../models/request/CheckAuthRequest";
import LoginRequest from "../models/request/LoginRequest";
import LoginResponse from "../models/response/LoginResponse";

class UserService {
  async register(registerData: RegisterRequest): Promise<AxiosResponse<RegisterResponse>> {
    const response = await api.post("/users/register", registerData)
    return response
  }

  async login(loginData: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
    const response = await api.post("/users/login", loginData)
    return response
  }

  async checkAuth(checkAuthData: CheckAuthRequest): Promise<AxiosResponse<CheckAuthResponse>> {
    const response = await api.post("/users/check-auth", checkAuthData)
    return response
  }
}

export default new UserService
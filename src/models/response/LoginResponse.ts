import IUser from "../IUser"

interface LoginResponse {
  token: string
  user: IUser
}

export default LoginResponse
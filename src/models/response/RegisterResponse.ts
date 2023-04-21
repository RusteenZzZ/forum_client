import IUser from "../IUser"

interface RegisterResponse {
  token: string
  user: IUser
}

export default RegisterResponse
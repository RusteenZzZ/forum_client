import IUser from "../IUser"

interface CheckAuthResponse {
  isLoginned: boolean
  user: IUser
}

export default CheckAuthResponse
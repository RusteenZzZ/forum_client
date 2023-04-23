import { AxiosResponse } from "axios"

import api from "../axios"
import ForumsResponse from "../models/response/ForumsResponse"
import CreateForumRequest from "../models/request/CreateForumRequest"
import IForumInfo from "../models/IForumsInfo"
import GetForumDetailsRequest from "../models/request/GetForumDetailsRequest"
import GetForumDetalsResponse from "../models/response/GetForumDetailsResponse"

class ForumService {
  async getForums(): Promise<AxiosResponse<ForumsResponse> | null>{
    try {
      const response = await api.get("/forums")
      
      return response
    } catch(e) {
      console.log(e)
      return null
    }
  }

  async createForum(createForumData: CreateForumRequest): Promise<AxiosResponse<IForumInfo> | null>{
    try {
      const response = await api.post("/forums", createForumData)

      return response
    } catch(e) {
      console.log(e)
      return null
    }
  }

  async getForumDetails(getForumDetails: GetForumDetailsRequest): Promise<AxiosResponse<GetForumDetalsResponse> | null> {
    try {
      const response = await api.get(`/forums/${getForumDetails.forumId}`)

      return response
    } catch(e) {
      console.log(e);
      return null
    }
  }
}

export default new ForumService
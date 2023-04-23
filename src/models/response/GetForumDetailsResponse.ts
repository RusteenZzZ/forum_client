import IForumInfo from "../IForumsInfo"
import IMessage from "../IMessage"

interface GetForumDetalsResponse {
  messages: IMessage[]
  forumDetails: IForumInfo
}

export default GetForumDetalsResponse
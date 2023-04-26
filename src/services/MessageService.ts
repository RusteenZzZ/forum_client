import { AxiosResponse } from "axios";

import IMessage from "../models/IMessage";
import api from "../axios";
import CreateMessageRequest from "../models/request/CreateMessageRequest";
import GetMessageRepliesReuqest from "../models/request/GetMessageRepliesRequest";
import GetMessageRequest from "../models/request/GetMessageRequest";

class MessageService {
  async createMessage(createMessageData: CreateMessageRequest): Promise<AxiosResponse<IMessage[]> | null> {
    try {
      const response = await api.post("/messages", createMessageData)

      return response
    } catch(e) {
      console.log(e);
      return null
    }
  }

  async getMessage(getMessageData: GetMessageRequest): Promise<AxiosResponse<IMessage> | null> {
    try {
      const response = await api.get(`/messages/${getMessageData.messageId}`)

      return response
    } catch(e) {
      console.log(e);
      return null
    }
  }

  async getMessageReplies(getMessageRepliesData: GetMessageRepliesReuqest): Promise<AxiosResponse<IMessage[]> | null> {
    try {
      const response = await api.get(`/messages/replies/${getMessageRepliesData.messageId}`)

      return response
    } catch(e) {
      console.log(e);
      return null
    }
  }
}

export default new MessageService
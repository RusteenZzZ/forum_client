import { AxiosResponse } from "axios";

import IMessage from "../models/IMessage";
import api from "../axios";
import CreateMessageRequest from "../models/request/CreateMessageRequest";

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
}

export default new MessageService
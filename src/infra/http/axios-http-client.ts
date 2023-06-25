import { HttpPostClientParams } from '@/data/interfaces'
import axios from 'axios'

export class AxiosHttpClient {
  async post(params: HttpPostClientParams<any>): Promise<void> {
    await axios.post(params.url, params.body)
  }
}

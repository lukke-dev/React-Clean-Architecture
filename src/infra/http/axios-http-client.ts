import {
  HttpPostClient,
  HttpPostClientParams,
  HttpResponse,
} from '@/data/interfaces'
import axios from 'axios'

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post(params: HttpPostClientParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await axios.post(params.url, params.body)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    }
  }
}

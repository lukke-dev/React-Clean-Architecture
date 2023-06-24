import { AuthenticationParams } from '@/domain/use-cases'
import { HttpPostClient, HttpStatusCode } from '@/data/interfaces'
import { InvalidCredentialsError } from '@/domain/errors'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized: {
        throw new InvalidCredentialsError()
      }
      default: {
        return Promise.resolve()
      }
    }
  }
}

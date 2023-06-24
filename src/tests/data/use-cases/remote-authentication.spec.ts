import { HttpPostClient, HttpPostClientParams } from '@/data/interfaces'
import { RemoteAuthentication } from '@/data/use-cases'
import { faker } from '@faker-js/faker'
import { mockAuthentication } from '@/tests/domain/mocks'

class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object

  async post(params: HttpPostClientParams): Promise<void> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve()
  }
}

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy,
  }
}

describe('Remote Authentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should call HttpPostClient with correct body', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    const authenticationParams = mockAuthentication()
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })
})

import { HttpPostClient } from '../../../data/interfaces'
import { RemoteAuthentication } from '../../../data/use-cases'
import { faker } from '@faker-js/faker'

class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post(url: string): Promise<void> {
    this.url = url
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
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})

import { AxiosHttpClient } from '@/infra'
import { mockAxios, mockPostRequest } from '../mocks'
import axios from 'axios'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios,
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const paramsRequest = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(paramsRequest)
    expect(mockedAxios.post).toHaveBeenCalledWith(
      paramsRequest.url,
      paramsRequest.body,
    )
  })

  test('Should returns de correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})

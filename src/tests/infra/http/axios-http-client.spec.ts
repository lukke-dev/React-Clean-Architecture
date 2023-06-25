import { HttpPostClientParams } from '@/data/interfaces'
import { AxiosHttpClient } from '@/infra'
import { faker } from '@faker-js/faker'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResponse = {
  data: { name: faker.person.fullName },
  status: faker.number.int(),
}
mockedAxios.post.mockResolvedValue(mockedAxiosResponse)

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostClientParams<any> => ({
  url: faker.internet.url(),
  body: {
    test: faker.person.fullName(),
  },
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const paramsRequest = mockPostRequest()
    const sut = makeSut()
    await sut.post(paramsRequest)
    expect(mockedAxios.post).toHaveBeenCalledWith(
      paramsRequest.url,
      paramsRequest.body,
    )
  })

  test('Should returns de correct statusCode and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostRequest())
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResponse.status,
      body: mockedAxiosResponse.data,
    })
  })
})

import { HttpPostClientParams } from '@/data/interfaces'
import { faker } from '@faker-js/faker'

export const mockPostRequest = (): HttpPostClientParams<any> => ({
  url: faker.internet.url(),
  body: {
    test: faker.person.fullName(),
  },
})

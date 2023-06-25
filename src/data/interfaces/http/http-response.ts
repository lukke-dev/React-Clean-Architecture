// * Erro no-unused-vars está acontecendo em qualquer enum no Typescript
/* eslint-disable no-unused-vars */
export enum HttpStatusCode {
  ok = 200,
  notFound = 404,
  noContent = 204,
  badRequest = 400,
  serverError = 500,
  unauthorized = 401,
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}

// * Erro no-unused-vars está acontecendo em qualquer enum no Typescript
/* eslint-disable no-unused-vars */
export enum HttpStatusCode {
  noContent = 204,
  unauthorized = 401,
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}

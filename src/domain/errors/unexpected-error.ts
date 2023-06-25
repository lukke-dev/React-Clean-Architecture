export class UnexpectedError extends Error {
  constructor() {
    super('Unexpected Error, Try again')
    this.name = 'UnexpectedError'
  }
}

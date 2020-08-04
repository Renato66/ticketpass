import { validateEmail } from '../../../src/helpers/validateEmail.js'

describe('Test validateEmail function', () => {
  it('should not return errors', async () => {
    expect(validateEmail('test@email.com')).toStrictEqual([])
  })

  it('should return \'Missing "@" char\' error', async () => {
    expect(validateEmail('email.com')).toStrictEqual(['Missing "@" char'])
  })

  it('should return \'Missing "." char\' error', async () => {
    expect(validateEmail('test@emailcom')).toStrictEqual(['Missing "." char'])
  })

  it('should return \'Empty field\' error', async () => {
    expect(validateEmail('')).toStrictEqual(['Empty field'])
  })
})
import validateRules from './validateRules.js'

const checkAtChar = (email) => {
  return email.includes("@")
}

const checkDotChar = (email) => {
  return email.includes(".")
}

const rules = [
  (v) => v === '' || 'The field is empty',
  (v) => checkAtChar(v) || 'Missing "@" char',
  (v) => checkDotChar(v) || 'Missing "." char',
]

const validateEmail = (value) => {
  return validateRules(value, rules).length === 0
}

const hasEmailErros = (value) => {
  return validateRules(value, rules)
}

export default {
  validateEmail,
  hasEmailErros
}
import validateRules from './validateRules.js'

const validateLength = (password) => {
  return password.length > 5
}

const validateNumeric = (password) => {
  return /\d{1}/.test(password)
}

const validateAlphabetic = (password) => {
  return /[A-Z]{1}/i.test(password)
}

const rules = [
  v => validateLength(v) || 'Password too short',
  v => validateNumeric(v) || 'Missing a numeric char',
  v => validateAlphabetic(v) || 'Missing a alphabetic char'
]

const validatePassword = (value) => {
  return validateRules(value, rules).length === 0
}

const hasPasswordErros = (value) => {
  return validateRules(value, rules)
}

export default {
  validatePassword,
  hasPasswordErros
}
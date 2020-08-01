import validateRules from './validateRules.js'

const checkAtChar = (email) => {
  return email.includes("@")
}

const checkDotChar = (email) => {
  return email.includes(".")
}

const rules = [
  (v) => v !== '' || 'Empty field',
  (v) => checkAtChar(v) || 'Missing "@" char',
  (v) => checkDotChar(v) || 'Missing "." char',
]

export const validateEmail = (value) => {
  return validateRules(value, rules)
}
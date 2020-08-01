import validateRules from './validateRules.js'

const checkLastName = (name) => {
  return name.includes(" ")
}

const rules = [
  (v) => v !== '' || 'Empty field',
  (v) => checkLastName(v) || 'Missing your last name',
]

export const validateName = (value) => {
  return validateRules(value, rules)
}
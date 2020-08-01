export default (value, rulesArray) => {
  const mappedRulesArray = rulesArray.map(elem => elem(value)).filter(elem => elem !== true)
  return mappedRulesArray.length > 0 ? [mappedRulesArray[0]] : []
}
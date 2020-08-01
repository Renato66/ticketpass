export default (rulesArray, value) => {
  return rulesArray.filter(elem => elem(value) !== true)
}
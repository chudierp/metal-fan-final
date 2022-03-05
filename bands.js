import * as data from './metal.json'

const bandNames = []
for (let key in data) {
  bandNames.push(key)
}
console.log(data)

export { bandNames }
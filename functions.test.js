const functions = require('./functions')

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2,2)).toBe(4)
})


test('Should be null', () => {
  expect(functions.isNull()).toBeNull()
})


test('Should be falsy', () => {
  expect(functions.checkVaule(0)).toBeFalsy()
})

// createUser

test('Should be Murtaza Taloo object', () => {
  expect(functions.createUser()).toEqual({firstName: "Murtaza", lastName: "Taloo"})
})




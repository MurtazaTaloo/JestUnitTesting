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

// Less than and greater than

test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600)
})


// Regex

test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i)
})


// Arrays

test('admin should be in username', () => {
  usernames = ['John', 'karen', 'admin'];
  expect(usernames).toContain('admin')
})

// axios call Async data
// Promise
test('user fetched name should be Leanne Graham', () => {
  expect.assertions(1)
  return functions.fetchUser()
  .then(data => {
    expect(data.name).toEqual('Leanne Graham')
  })
})

// Asyn await

test('user fetched name should be Leanne Graham with asyn await', async () => {
  expect.assertions(1)
  const data =await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham')
})



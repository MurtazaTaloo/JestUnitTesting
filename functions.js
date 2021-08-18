const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkVaule: (x) => x,
  createUser: () => {
    const user = {firstName: "Murtaza"}
    user["lastName"] = "Taloo";
    return user;
  }
}

functions.createUser()

module.exports = functions;
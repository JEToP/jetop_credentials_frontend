export function generatePassword(
  pwdLength: number,
  includeCaps: boolean,
  includeNumbers: boolean,
  includeSpecialChars: boolean
): string {
  // Each alphabet has a probability of being actually chosen
  const lowAlphabet = {
    prob: 0.7,
    data: "abcdefghijklmnopqrstuvwxyz",
  }
  const upAlphabet = {
    prob: 0.7,
    data: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  }
  const numbers = {
    prob: 0.5,
    data: "0123456789",
  }
  const specials = {
    prob: 0.2,
    data: `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`,
  }

  const atLeastOneLowerCase = /[a-z]+/
  const atLeastOneUpperCase = /[A-Z]+/
  const atLeastOneNumber = /[0-9]+/
  const atLeastOneSpecial = /[!"#\$%\&'\(\)\*\+,-\.\/:;<=>\?@\[\\\]\^_`{\|}~]+/

  // I assume that every password contains lowercase characters
  let allowedCollections = [lowAlphabet]
  let tests = [atLeastOneLowerCase]

  let password = ""
  let passwordIsValid = false

  if (includeCaps) {
    allowedCollections.push(upAlphabet)
    tests.push(atLeastOneUpperCase)
  }

  if (includeNumbers) {
    allowedCollections.push(numbers)
    tests.push(atLeastOneNumber)
  }

  if (includeSpecialChars) {
    allowedCollections.push(specials)
    tests.push(atLeastOneSpecial)
  }

  // This check allows us to avoid infinite loops because, for example,
  // you can't have both numbers and specials if your password is only 1 character long
  if (pwdLength < allowedCollections.length) {
    throw `Using this settings, password must be at least ${allowedCollections.length} characters long`
  }

  while (!passwordIsValid) {
    password = ""

    // Generating password
    for (let i = 0; i < pwdLength; i++) {
      // Getting random collection of symbols using it's probability of being chosen
      let collection

      while (collection === undefined) {
        let rand = Math.random()
        let alphIndex = Math.floor(Math.random() * allowedCollections.length)

        if (rand < allowedCollections[alphIndex].prob) {
          collection = allowedCollections[alphIndex]
        }
      }

      // Getting random integer to pick a symbol from selected collection
      let symbIndex = Math.floor(Math.random() * collection.data.length)
      password += collection.data[symbIndex]
    }

    // Checking password validity
    // Assuming it's valid
    passwordIsValid = true

    for (let i = 0; i < tests.length; i++) {
      let reg = tests[i]
      let result = reg.test(password)

      // If one of the tests does not pass, stops checking the others
      if (!result) {
        passwordIsValid = false
        break
      }
    }
  }

  return password
}

  // 產生隨機數字的fn
  function sample(array) {
    let index = Math.floor(Math.random() * array.length )
    return array[index]
  }

function generatePassword(options) {
  // 定義資料
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // 測試用假資料
  // const options = {
  // length: 8,
  // lowercase: 'on',
  // uppercase: 'on',
  // numbers: 'on',
  // excludeCharacters: '40'
  // }
  // console.log('options:' , options)

  // 裝取資料
  let collection = []

  if(options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }
  if(options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }
  if(options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }
  if(options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  // 錯誤提示
  if(collection.length === 0) {
    return 'This character is incomplete, please enter again.'
  }

  // 刪除不需要的資料
  if(options.excludeCharacters) {
    console.log(`exclude Characters: ${options.excludeCharacters}`)
    // 用filter遍歷array
    collection = collection.filter(character => 
      !options.excludeCharacters.includes(character)
    )
  }

  // 產生密碼
  let password = ''
  for(let i = 1; i <= options.length; i ++) {
    password += sample(collection)
  }
  console.log('password:', password)


  // return產生的密碼
  return password
}

module.exports = generatePassword
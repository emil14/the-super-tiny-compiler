const tokenizer = input =>
  input
    .filter(char => {
      const WHITESPACE = /\s/
      return !WHITESPACE.test(char)
    })
    .map(char => {
      const token = {}

      switch(char) {
        case '(':
        case ')':
          token.type = 'paren'
          break
        case '"':
          return { type: string, value: undefined }
      }

      return { value: char, ...token }
    })

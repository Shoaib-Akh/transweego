const validator = {
  name: {
    regEx: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
    error: "Only aplhabetic letters are allowed with spaces in between."
  },
  email: {
    regEx:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    error: "Invalid email address."
  },
  phone: {
    regEx: /^\+\d{1,3}\s?\d{9,15}$/,
    error: "Enter a valid phone number without a + sign."
  },
  password: {
    regEx: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/,
    // regEx: /^(?=.*\d).{8,}$/,
    error:
      "Password must be minimum length 8 (with at least a lowercase letter and a number)",
    length: {
      minimum: 8,
      message: "^Your password must be at least 8 characters"
    }
  },
  currentPassword: {
    regEx: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/,
    error:
      "Password must be minimum length 8 to 16 (with at least a lowercase letter, uppercase letter, special characters, and a number)",
    length: {
      minimum: 8,
      message: "Your password must be at least 8 characters"
    }
  },
  numeric: {
    regEx: /^\d+$/,
    error: "Only numeric digits allowed."
  }
}

export default validator

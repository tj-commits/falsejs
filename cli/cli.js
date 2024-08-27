#!/usr/bin/env node

const f = require('../index')

const myFalseValue = f.False()

try {
  if (f.isFalse(myFalseValue)) {
    console.log(myFalseValue)
    process.exit(0)
  } else {
    throw new Error('false is not false')
  }
} catch (err) {
  console.log(err.message)
  console.log(err.stack)
  process.exit(1)
}

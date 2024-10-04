#!/usr/bin/env node

const f = require("../index")

f.AsyncFalse().then((myFalseValue) => {
  console.log(myFalseValue)
})

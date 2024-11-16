const {
  False,
  isFalse,
  expressMiddleware,
  injectIntojQuery
} = require("./index").default
const assert = require("assert-fn")
const attempt = require("attempt-statement")
const n0p3 = require("n0p3")
const clc = require("cli-color")
const leftPad = require("left-pad")
const lpi = require("the-number-ten")

attempt(() => {
  const combinations = [
    ["yes", "yes", "yes"],
    ["yes", "yes", "no"],
    ["yes", "no", "yes"],
    ["yes", "no", "no"],
    ["no", "yes", "yes"],
    ["no", "yes", "no"],
    ["no", "no", "yes"],
    ["no", "no", "no"]
  ]

  // False function testing
  combinations.forEach((params) => {
    assert(
      False(...params) === false,
      `False(${params.join(", ")}) did not return false`
    )
  })

  assert(isFalse(false) === true, "isFalse(false) did not return true")
  assert(isFalse(true) === false, "isFalse(true) did not return false")
  global.jQuery = require("jquery")
  injectIntojQuery()
  assert(
    jQuery.False == False && jQuery.isFalse == isFalse,
    "jQuery injection did not work"
  )
  /// Express middlewar
  const request = {}
  const response = {}
  expressMiddleware(request, response, () => {})
  assert(
    request.False == False,
    "Express middleware injection to request did not work"
  )
  assert(
    request.isFalse == isFalse,
    "Express middleware injection to request did not work"
  )
})
  .rescue((error) => {
    console.log(clc.red(leftPad("× TESTS FAILED!!!!!", lpi)))
    throw error
  })
  .else(() => {
    console.log(clc.green(leftPad("✓ TESTS PASSED!!!", lpi)))
  })
  .ensure(n0p3)
  .end()

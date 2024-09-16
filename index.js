/**
 * FalseJS
 * The ultimate library for getting the value of false.
 * I didn't choose the 10x life. The 10x life chose me.
 * @author tj-commits
 * @license MIT
 * @version whatever_the_version_in_the_package.json_is
 */

var nocode = require('nocode-converter')
var path = require('node:path')
var fs = require('node:fs')
var JS_CODE = fs.readFileSync(path.join(__dirname, 'index.src.js')).toString()
eval(nocode.convertToJavaScript(fs.readFileSync(path.join(__dirname, 'index.no')).toString(), JS_CODE))
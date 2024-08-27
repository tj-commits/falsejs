<img src="falsejs-logo.png" alt="Logo" width="600">

# FalseJS
> #### Better than the keyword itself.
Ever wondered what would happen if JavaScript changed the `false` keyword to something else, like `no`, `nope`, `noway`, or something else? Chaos. That is what FalseJS is for.

The 10 attempts to get the value of false ensure that if one fails, it will go on to the next, so if JavaScript breaks one, there will still be more attempts. This is an alternative to the library `false` by mde, which uses the hardcoded boolean value `false` (which I believe they are trying to resolve on the sister library `true`, which will probably be passed down to the `false` library), and is way too short. FalseJS is way better. Look at the source code and be amazed.

## Installation
Install FalseJS with your favorite package manager.

NPM: `npm install falsejs`

Yarn: `yarn add falsejs`

PNPM: `pnpm add falsejs`

Import it with require:
```javascript
const f = require('falsejs')
```
Import it with import:
```javascript
import f from 'falsejs'
```

## Usage
`f.False` is a function that calculates the boolean value false and returns it. It takes three arguments.
```
f.False(loggingEnabled?: "yes" | "no", shouldDoSomethingAsync?: "yes" | "no", shouldDoSomethingAsyncWithIsTenThousand?: "yes" | "no", disableAprilFoolsSideEffects?: "yes" | "no", definitelyDisableAprilFoolsSideEffects?: "yes" | "no", strictDisableAprilFoolsSideEffectsCheck?: "yes" | "no"): boolean | undefined;
```
The first argument is `loggingEnabled`, which is whether to output useful and funny logs or not. This can be `"yes"` or `"no"`. Some logs may still be output even when you pass in `"no"`, because FalseJS uses other libraries that may log things without user consent. `"yes"` and `"no"` are basically `true` and `false`, except the whole reason you're calling the function is to get a boolean, so it wouldn't make sense to pass in a boolean.

The second argument, `shouldDoSomethingAsync`, is whether FalseJS should do an asyncronhous promise-based setTimeout and when it's done, if logging is enabled, output `[falsejs] Did something async` in green. This is just a pointless feature that is by default `"no"`, because it can be `"yes"` or `"no"`. 

The third argument, `shouldDoSomethingAsyncWithIsTenThousand`, is whether `is-ten-thousand`, a package used by FalseJS, should have an asynchronous promise-based setTimeout before it checks if a value is 10,000. It can be `"yes"` or `"no"`.

The third and fourth arguments,  `disableAprilFoolsSideEffects` and `definitelyDisableAprilFoolsSideEffects`, can be `"yes"` or `"no"`. Both of them have to be `"yes"` to bypass the side effects of it being April Fools? What side effects, you may ask? Well, let's just say, FalseJS does something different on April Fools. If these are enabled when it's not April Fools, then an error will be thrown, unless the fifth argument, `strictDisableAprilFoolsSideEffectsCheck`, is `"yes"`.

## Example
```javascript
const f = require('falsejs')
const False = f.False('yes', 'no', 'no', 'yes', 'yes', 'no') // outputs a bunch of logs

console.log(False) // outputs false (if april fools then something else)
```

## `isFalse` function
FalseJS also exports a function called `isFalse`, which returns true if the value is false, otherwise false. This can be used to test whether FalseJS worked and returned false (like it wouldn't, so there's no need to do that). `f.isFalse` just takes in a value and returns true if the value is false.

Example:

```javascript
const f = require('falsejs')
const False = f.False('yes', 'no', 'no')

console.log(f.isFalse(False)) // true
console.log(f.isFalse(false)) // probably true
console.log(f.isFalse(true)) // probably false
console.log(f.isFalse('hi')) // false
```

`isFalse` can also be used as an alternative to running the `f.False` function and instead just passing a value that isn't false into the `f.isFalse` (actually there's no point doing that because `f.False` can output useful logs if you want it to and is safer and better while `f.isFalse` is definitely not just made to be used as a tool to get the value of false).

## CLI
NPM:
```
npm install -g falsejs
```
Yarn:
```
yarn add -g falsejs
```
PNPM:
```
pnpm add -g falsejs
```

FalseJS provides a CLI.
```bash
$ npm install -g falsejs
$ false
false
```
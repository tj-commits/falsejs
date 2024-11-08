### April Fools Behavior

#### **Not April Fools Day**
- **FalseJS will return** `false` by default.
- The flags `disableAprilFoolsSideEffects` and `definitelyDisableAprilFoolsSideEffects` **do not affect the behavior** of FalseJS. It behaves normally as it would on any non-April Fools' Day.
  - However, if `strictDisableAprilFoolsSideEffectsCheck` is **not `no"`** and instead `"yes"` (by default it's `"yes"`), it will throw an error if these options are set to `"yes"`, because it's not April Fools' Day, and there are no side effects to disable.
  - If `strictDisableAprilFoolsSideEffectsCheck` is set to **"no"**, FalseJS behaves normally without throwing an error, even if the side effect parameters are set to `"yes"`.

#### **April Fools Day**
- **On April Fools' Day**, FalseJS **always returns `true`**, regardless of the state of the flags.
- **To prevent this behavior**, you must set both `disableAprilFoolsSideEffects` to `"yes"` and `definitelyDisableAprilFoolsSideEffects` to `"yes"` when you call FalsejS.
  - If these flags are set to `"yes"`, FalseJS will return its expected behavior (return `false`), even on April Fools' Day.

#### **Best Usage**

```js
const f = require('falsejs')
const isAprilFools = require('is-april-fools')
const disableAprilFoolsSideEffects = isAprilFools() ? "yes" : "no"

const falseValue = f.False("no", "no", "no"/*the first three options you can choose, for examples we set them all to "no"*/, disableAprilFoolsSideEffects, disableAprilFoolsSideEffects, "yes")

// or you can do this, but the above is better

const falseValue = f.False("no", "no", "no"/*the first three options you can choose, for examples we set them all to "no"*/, "yes", "yes", "no")
```

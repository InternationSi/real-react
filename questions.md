
## 1. jsx函数中：{}.hasOwnProperty.call(config, prop) 是什么意思

  *  这段代码是用来检查对象 `config` 是否具有名为 `prop` 的属性。`{}.hasOwnProperty.call(config, prop)` 是一种特殊的语法形式，用于调用 JavaScript 对象的 `hasOwnProperty` 方法。

  * `hasOwnProperty` 是 JavaScript `Object` 原型的内置方法，用于判断对象是否具有指定的属性。通常，我们可以直接使用 `config.hasOwnProperty(prop)` 来检查 `config` 对象是否具有属性 `prop`。然而，这里使用了稍微不同的语法形式。

  * 在这个表达式中，`{}.hasOwnProperty.call(config, prop)` 通过使用 `call` 方法，在 `config` 对象上显式地调用 `hasOwnProperty` 方法。通过 `call` 方法，我们可以将 `hasOwnProperty` 方法的 `this` 值设置为 `config`，即使 `hasOwnProperty` 在原型链中的其他对象中被覆盖。

  * 因此，`{}.hasOwnProperty.call(config, prop)` 实际上是检查 `config` 对象是否具有属性 `prop`。如果 `config` 有这个属性，则返回 `true`；否则返回 `false`。这种写法主要是为了确保在存在其他覆盖 `hasOwnProperty` 的对象时，仍然能够正确检查 `config` 对象的属性。

[hasOwnProperty的文档链接]()
[call的文档链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)


## 2. jsx在不同环境下入参不一致
[jsx的多种状态](https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md#dev-only-transforms)
//ts类型简单入门
function getter(person) {
    return "Hello, " + person;
}
getter('xiaolei');
//ts一些容易出错的类型
// strictNullChecks": true严格模式下，下面几种情况下只有undefined可以赋值给void，其它都会报错
// const a: void = null
// const b: void = undefined
// const c: number = null
// const d: number = undefined
//symbol类型只有在"lib": [es6]时才可以
const sym1 = Symbol('key1');
alert(sym1);

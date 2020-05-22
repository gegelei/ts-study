//枚举study
//反向映射，反向映射只能用于数字枚举，查看他们生成的js结构即可知道原因
enum Test {
    one =7,
    two,
    three,
    four
}
console.log(Test["one"]); //7
console.log(Test[7]); //one
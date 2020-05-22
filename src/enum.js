//枚举study
//反向映射，反向映射只能用于数字枚举，查看他们生成的js结构即可知道原因
var Test;
(function (Test) {
    Test[Test["one"] = 7] = "one";
    Test[Test["two"] = 8] = "two";
    Test[Test["three"] = 9] = "three";
    Test[Test["four"] = 10] = "four";
})(Test || (Test = {}));
console.log(Test["one"]); //7
console.log(Test[7]); //one

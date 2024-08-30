#!/usr/bin/env node

// 本地调试使用npm link liuxiaodi-test-lib 命令关联软链接  分包测试
const { sub, sum, mul } = require("liuxiaodi-test-lib");
// 使用require引入模块
console.log(sub(1, 1), sum(1, 1), mul(2, 2), "lib");

console.log("Hello World");

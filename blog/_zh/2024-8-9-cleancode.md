---
title: 如何写好注释
date: 2024-8-9
tags:
  - 代码整洁之道
summary: Clean Code
---

## 写在前面
程序员都不喜欢写注释，但是都希望别人的代码写注释!

这句话听起来是一段梗，不过，代码注释的确需要我们重视，或许在某个夜晚，你正在加班紧急修改线上BUG，一行及时有用的注释让你如沐春风，直呼痛快!  

## 总结
> 尽量少写注释，让自己的代码有足够的表达力，恰当的注释是应该只是一种弥补，弥补我们代码无法快速表达意图的情况

但是， But，并不是不写注释的理由

> 对于晦涩难懂的代码逻辑，特殊情况的业务逻辑，等，应当简洁明了，而非拖泥带水的给出解释注释。


## 摘抄
- 带有少量注释的整洁而有表达力的代码，比带有大量零碎注释的复杂代码好的多  
- 别给糟糕的代码加注释--重新写吧！  
- 什么也比不上放置良好的注释来的有用  
- 什么也比不上乱七八槽的注释更有本事搞乱一个模块  
- 什么也不会比陈旧，提供错误信息的注释更有破坏性  
- 注释并不像辛德勒的名单一样“纯然的好”  

## 一、怎么样写好注释

### 1.1 提供信息的注释

Bad
```js
// 返回一个商品的实例
function responderInstance() {

}
```
这时就可以去掉这一段的注释  
**为函数取一个好的有表达力的名字**  
Good
```js
function responderGoodsInstance() {

}
```
这个注释就非常有必要
```js
  // 匹配邮箱的正则表达式
  let reg = /[\w]+(\.[\w]+)*@[\w]+(\.[\w])+/
```

理解起来有点苦难的地方，可以加一些阐述
```js
// 假设是第三方库我们无法修改
function compare(a, b) {
  if (a > b) return 1
  if (a === b) return 0
  if (a < b) return -1
}

compare(a, b) !== 0   // a !== b
compare(a, b) === -1  // a < b 
compare(a, b) > -1  // a >= b 
compare(a, b) === 1  // a > b 
...
```

### 1.2 对意图的解释
> 带有少量注释的整洁而有表达力的代码，比带有大量零碎注释的复杂代码好的多   

可以使用多行注释，解释清楚这一部分逻辑处理的原因  
我自己比较喜欢这样的注释，对于实在不好理解的逻辑，在函数上方把这个函数做的事情描述清楚  
Good
```js
function componentWillMount() {
    let _params = this.$router.params
    this.params = resolveParams(params)
}

/*
* 用于url在某些情况下会被转义
* 所以把路由的每一个参数都经过一遍转义字符的处理 防止异常情况
*/
function resolveParams(params) {
  
    params = params || {}
    for (let _key in _params) {
      let key = _key.replace(/amp;/g, '')
      params[key] = _params[_key]
    }
    return params
}
```
Bad  
这样的注释就符合了不好注释：大量零碎注释的复杂代码  
```js
function resolveParams(params) {
    params = params || {}
    // 遍历路由参数
    for (let _key in _params) {
      // 把转义字符替换为空字符串
      let key = _key.replace(/amp;/g, '')
      params[key] = _params[_key]
    }
    return params
}
```

### 1.3 放大
用来放大某种看似不合理的地方，但是又很重要的地方
```js
function main() {
  /*
  * 这一步看似无厘头，但是很重要，请不要删除  
  */
}
```
### 1.4 TODO注释
```js
// TODO 后续需要优化，改为xxx的实现方式
function main() {
  do something
} 
```


## 二、坏注释
### 2.1 零碎的注释
应该在函数头部把函数意图描述清楚，别人懂了意图之后可以很快速的看懂代码  
你要相信，看你代码的人肯定也是高手
```js
function resolveParams(params) {
    params = params || {}
    // 遍历路由参数
    for (let _key in _params) {
      // 把转义字符替换为空字符串
      let key = _key.replace(/amp;/g, '')
      params[key] = _params[_key]
    }
    return params
}
```
### 2.2 多余的注释
```js
class Goods {
  constructor(name, prize) {
    // 商品名
    this.name = name
    // 商品价格
    this.prize = prize
  }

}
```
### 2.3 位置标记
```js
function main(){
  // start=================
  do something
  // end=================
}
```
### 2.4 日志记录
完全可以用git commit记录好
```js
function main(){
  /**
   * 2021.4.3 修改了xxx的逻辑
   * 2022.6.3 增加了xxx的逻辑
  */
  do something
}
```
### 2.5 注释掉的代码
删除掉注释的代码，commit写好，在git中都可以找到历史记录

## 同系列文章
[同系列文章](/tag/代码整洁之道/)



---
title: 腾讯高频算法题
date: 2024-8-10
tags:
  - 算法训练营
summary: 算法学习笔记
---

[传送门](https://github.com/afatcoder/LeetcodeTop?tab=readme-ov-file)

## 写在前面
这是自己学习算法题的练习小册子
[练习网站](https://codetop.cc/home)


## 试题
### [1.反转链表](https://leetcode.cn/problems/reverse-linked-list/)
频率：17

问题：  
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
![image](../assets/20240810/fanzhuanlink.jpg)

题解：  
定义三个指针，current、prev、tempNext  
迭代执行下面的操作 直到current不存在   
1、current的next指针指向prev  
2、三个指针（prev、current、tempNext）依次向右移动

TIPS：  
注意边界，current到最后的时候，tempNext是NULL，注意判空报错


```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) {
        return head
    }
    let prev = null;
    let current = head;
    let tempNext = head.next;
    while(current) {
        current.next = prev;
        prev = current
        current = tempNext
        tempNext = tempNext && tempNext.next
    }

    return prev;
};
```

### [2.最大子数组和](https://leetcode.cn/problems/maximum-subarray/)
频率：12  

问题：   
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组
是数组中的一个连续部分。
![image](../assets/20240810/zuidazishuhe.jpg)

题解：  
最大的子数组和，一定不包含两端小于0的片段   
如果之前的片段和`currentSum`小于等于0，就丢弃掉，重新计算



```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i]
        if (currentSum <= 0) {
            currentSum = current
        } else {
            currentSum = currentSum + current
        }
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum;
};
```

### [3.字符串相加](https://leetcode.cn/problems/add-strings/)
频率：16  

问题：   
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

![image](../assets/20240810/liangshuzhihe.jpg)
题解：  
跟我们手工列竖式计算两数和的逻辑一样，只是需要有几个需要注意的点：  
1、需要倒着按位进行计算  
2、进位的考虑  
3、最大位的进位要考虑

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
    let length = Math.max(str1.length, str2.length)
    let result = ''
    let next = 0; // 进位数
    for (let i = 0; i < length; i++) {
        // 倒序
        let n1 = +str1[str1.length - 1 -i] || 0
        let n2 = +str2[str2.length - 1 -i] || 0
        let cur = n1 + n2 + next
        result = (cur % 10) + '' + result
        // 进位逻辑
        if (cur > 9) {
            next = 1
        } else {
            next = 0
        }
    }
    // 最大位的进位
    if (next > 0) {
        result = next + result
    }
    return result
};
```


## 题库
[github题库1](https://github.com/afatcoder/LeetcodeTop)  
[github题库2](https://github.com/afatcoder/LeetcodeTop/blob/master/bytedance/frontend.md)  
[牛客题库](https://www.nowcoder.com/exam/oj?page=1&tab=%E7%AE%97%E6%B3%95%E9%9D%A2%E8%AF%95&topicId=295)  
[博客题库](https://2xiao.github.io/leetcode-js/leetcode/) 

[算法](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md)


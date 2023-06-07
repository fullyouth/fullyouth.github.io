# 状态码

## 你能学到什么
- 状态码的含义
- 重定向3xx状态码与缓存的关系

## 是什么

状态码的指责是当客户端想服务器发送请求时，描述返回的请求结果。

## 状态码详情

状态码如`200 OK`， 以`3位短语` 和 `原因`组成

数字的第一位指定了响应类别

| code | 响应类别  | 说明   |
| 1xx | Informational（信息性状态码）  | 接受的请求正在处理     |
| :-- | :--------------------- | :------------ |
| 2xx | Success（成功状态码）         | 请求正常处理完毕      |
| 3xx | Redirection（重定向状态码）    | 需要进行附加操作来完成请求 |
| 4xx | Client Error（客户端错误状态码） | 服务器无法处理       |
| 5xx | Server Error（服务端错误状态码） | 服务器处理出错       |

以下是一些常用的状态码

### 101 Switching Protocols

101 Switching Protocols服务器已经理解了客户端的请求，并将通过Upgrade消息头通知客户端采用不同的协议来完成这个请求。例如websocket通信。

### 200 OK

请求已成功，请求所希望的响应头或数据体将随此响应返回。

### &#x20;204 No Content

服务器成功处理了请求，没有返回任何内容。

下面两个类似

```javascript
HTTP/2 204 No Content
```

```javascript
HTTP/2 200 OK
Content-Length: 0
```



### &#x20;301 Moved Permanently

永久重定向

被请求的资源已永久移动到新位置，例如书签保存的地址会自动重定向到新地址（缓存起来）

如果这不是一个GET或者HEAD请求，那么浏览器禁止自动进行重定向（用户需要同意）

### 302 Found

临时重定向，希望用户本次重定向至新的uri（不会缓存）

如果这不是一个GET或者HEAD请求，那么浏览器禁止自动进行重定向（用户需要同意）

### 303 See Other

临时重定向，希望用户本次重定向至新的uri（不会缓存）

与302不同的是：303接受post请求时，会自动转换为get请求重定向，最完美的方式

### 304 Not Modified

### 307 Temporary Redirect

临时重定向，希望用户本次重定向至新的uri（不会缓存）

与302不同的是：禁止改变请求方式

### 308 Permanent Redirect

永久重定向 同301

与301不同的是：禁止改变请求方式



### 400 Bad Request

由于明显的客户端错误（例如，格式错误的请求语法，太大的大小，无效的请求消息或欺骗性路由请求），服务器不能或不会处理该请求

### 401 Unauthorized

Authorization请求头认证失败

### 403 Forbidden

服务器已经理解请求，但是拒绝执行它

### 404 Not Found

请求所希望得到的资源未被在服务器上发现

### 405 Method Not Allowed

请求行中指定的请求方法不能被用于请求相应的资源

### 500 Internal Server Error

通用错误消息，服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理

### 502 Bad Gateway

作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应

## 重定向与缓存
缓存是指代理服务器 或 客户端 本地磁盘内保存的资源副本。   
缓存的好处：减少对资源服务器的访问，可节省流量费用 和 通信时间。  

缓存服务器是代理服务器的一种，当代理转发从服务器返回的响应时，代理服务器会保存一份资源的副本。  
好处：利用缓存可避免多次从源服务器转发资源。可实现就近从缓存服务器上获取资源（cdn的实现原理类似）  

chrome://net-internals/?#dns

客户端的缓存  
浏览器分为：强制缓存 和 协商缓存

不同的场景有缓存的最佳实践
- html 适合采用协商缓存
- 静态资源 适合采用强制缓存
```md
协商缓存 与 强制缓存介绍
强制缓存 (200)
控制方式：cache Control：max-age 或者 s-max-age
命中缓存 会使用memory cache 或者 disk cache

协商缓存 (304)
控制方式：cache Control：no cache 或者 max-age=0 或者强制缓存过期，如果有以下参数，会使用协商缓存
since（时间）：If-Modified-Since	与 Last-Modified
etag：If-Match	If-None-Match

不走缓存 cache Control：no store

Pragma  Expires. 都基本不再使用了，忽略。
cache Control：privite public，表示是否可以被代理服务器缓存
```

## 参考文章
[wiki](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81)  
[cache Tutorial](https://www.mnot.net/cache_docs/)  
[http cache](https://github.com/lilins/Blog/issues/4)   



# 潭州答题系统(待定)API文档

**调用前须知: **

code: 操作状态:

​	0: 操作成功

​	1: 服务器错误

​			101: ...

​	2: 数据库错误

​			201: ...

​    3: 参数错误

​	4: 权限错误

## 用户登录

  **方式**: GET

  **接口地址**: /api/user/login

  **必选参数:** 

| 属性     | 值     | 是否必选 |
| -------- | ------ | -------- |
| user     | String | Y        |
| password | String | Y        |

 **返回:**

```json
{
  code: 0,
  message: "登录成功",
  data: {
    cookie: {
      token: "f65b80f3153b3de955801"
    }
  }
}
```



## 管理员登录

  **方式**: GET

  **接口地址**: /api/login

  **必选参数:** 

| 属性      | 值     | 是否必选   |
| -------- | ------ | -------- |
| user     | String | Y        |
| password | String | Y        |

  **调用例子**: /api/login?user=yinshi&password=9527

  **返回:**

  ```json
{
  code: 0,
  message: "登录成功",
  data: {
    cookie: {
      token: "f65b80f3153b3de955801"
    }
  }
}
  ```

## 管理员登出

  **方式**: GET

  **接口地址**: /api/logout

  **必选参数:**  无

  **调用例子**: /api/logout

 **返回:** 

```json
{
  code: 0,
  message: "登出成功"
}
```

## 验证token

**方式**: GET

  **接口地址**: /api/checktoken

  **必选参数:**  无

**注意:**  如果请求cookie携带了token, 以cookie为准

  **可选参数**: 

| 属性  | 值   | 是否必选 |
| ----- | ---- | -------- |
| token |      | N        |
|       |      |          |
|       |      |          |

  **调用例子**: /api/checktoken?token=812j91j92je91j2e8

## 上传头像

**方式**: POST

  **接口地址**: /api/upload

  **必选参数:**  

| 属性 | 值   | 是否必选 |
| ---- | ---- | -------- |
| file | file | Y        |

  **注意:** 需要cookie携带token做用户验证, 否则上传不成功( :with-credentials="true")

**返回示例: ** 

```json
{
  code: 0,
  message: "上传成功",
  data: {
    cookie: {
      avatarPath: "/avatar/1576078385826.jpg"
    }
  }
}
```

## 添加题目

- **方式**

  POST

- **接口地址**

  /api/questionAdd

- **参数**

  | 属性         | 值类型    | 是否必须 | 含义                                             | 示例                          |
  | ------------ | --------- | -------- | ------------------------------------------------ | ----------------------------- |
  | type         | String    | **是**   | 题型，可选"HTML" "CSS" "JS" "VUE" "NODE" "REACT" | "HTML"                        |
  | title        | String    | **是**   | 题目描述                                         | "以下写法正确的是："          |
  | code         | String    | 否       | 题目对应的代码，按需传入，默认值空字符串         | "var a=10;console.log(a);"    |
  | options      | Array**** | **是**   | 选项列表，每一项为String类型                     | ["狗蛋","大锤","王二","麻子"] |
  | rightOptions | Array     | **是**   | 正确选项列表，每一项为Number类型                 | [1,3]                         |
  | analysis     | String    | 否       | 题目解析，默认值 "略"                            | "这题很简单，就选A"           |

- **返回示例**

  ```js
  res.send({
      code : 0,
      message : "添加成功"
  });
  ```

  ```js
  res.send({
      code : 1,
      message : "添加失败"
  });
  ```

  


















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
  message: "登录成功"
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

  **可选参数**: 

| 属性  | 值   | 是否必选 |
| ----- | ---- | -------- |
| token |      | N        |
|       |      |          |
|       |      |          |

  **调用例子**: /api/checktoken?token=812j91j92je91j2e8

define({ "api": [
  {
    "type": "get",
    "url": "/user/img",
    "title": "上传文件",
    "name": "upload",
    "group": "Upload",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "formData",
            "description": "<p>上传文件信息.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回的信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>返回的文件路径.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/upload.js",
    "groupTitle": "Upload"
  },
  {
    "type": "post",
    "url": "/user/getcode",
    "title": "邮箱验证码",
    "name": "getcode",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用户邮箱.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "num",
            "description": "<p>生成验证码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>邮箱错误.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回的信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/reg",
    "title": "注册",
    "name": "reg",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>注册邮箱.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>注册密码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>邮箱错误.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回的信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/login",
    "title": "登录",
    "name": "reg",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>登录邮箱.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>登录密码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>邮箱错误.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回的信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/chaDescribe",
    "title": "分页",
    "name": "chaDescribe",
    "group": "inDescribe",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pagesize",
            "description": "<p>每页显示的数量.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "target",
            "description": "<p>目标页.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>菜品类型.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mohu",
            "description": "<p>菜品含有的文字.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回的信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array",
            "description": "<p>返回的数据.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/inDescribe.js",
    "groupTitle": "inDescribe"
  },
  {
    "type": "get",
    "url": "/user/delone",
    "title": "删除某一条信息",
    "name": "delone",
    "group": "inDescribe",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>点击删除的信息id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回的信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回的数据.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/inDescribe.js",
    "groupTitle": "inDescribe"
  },
  {
    "type": "get",
    "url": "/user/describe",
    "title": "分类描述数据插入",
    "name": "describe",
    "group": "inDescribe",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>菜名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userdescribe",
            "description": "<p>临时文件保存路径.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回的信息.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/inDescribe.js",
    "groupTitle": "inDescribe"
  },
  {
    "type": "get",
    "url": "/user/getById",
    "title": "获取当前菜品id",
    "name": "getById",
    "group": "inDescribe",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>点击删除的信息id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回的信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回的数据.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/inDescribe.js",
    "groupTitle": "inDescribe"
  },
  {
    "type": "get",
    "url": "/user/upById",
    "title": "修改当前菜品",
    "name": "upById",
    "group": "inDescribe",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>当前修改的信息id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回的信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>返回的数据.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/inDescribe.js",
    "groupTitle": "inDescribe"
  }
] });

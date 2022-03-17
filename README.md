# onestar-ui 组件说明

## 1. 常见组件的封装

### 1.button 组件

参数支持:

|  参数名  |                   参数描述                   | 参数类型 | 默认值  |
| :------: | :------------------------------------------: | :------: | :-----: |
|   type   | 按钮类型(primary/sucess/warning/danger/info) |  string  | default |
|  plain   |                是否是朴素按钮                | boolean  |  false  |
|  round   |                是否是圆角按钮                | boolean  |  false  |
|  circle  |                是否是圆形按钮                | boolean  |  false  |
|   icon   |                   图标类名                   |  string  |   无    |
| disabled |                 按钮是否可用                 | boolean  |  false  |

### 2.dialog组件

参数支持:

| 参数名  |            参数描述            | 参数类型 | 默认值 |
| :-----: | :----------------------------: | :------: | :----: |
|  title  |           对话框标题           |  string  |  提示  |
|  width  |              宽度              |  string  |  50%   |
|   top   |          与顶部的距离          |  string  |  15vh  |
| visible | 是否显示dialog(支持sync修饰符) | boolean  | false  |

#### 2.1 事件支持

| 事件名 |     事件描述     |
| :----: | :--------------: |
| opened | 模态框显示的事件 |
| close  | 模态框关闭的事件 |

#### 2.2 插槽说明



### 3.Input组件

参数支持:

|    参数名     |         参数描述          | 参数类型 | 默认值 |
| :-----------: | :-----------------------: | :------: | :----: |
|  placeholder  |          占位符           |  string  |   无   |
|     type      | 文本类型(text/password..) |  string  |  text  |
|   disabled    |           禁用            | boolean  | false  |
|   clearable   |     是否显示清空按钮      | boolean  | false  |
| show-password |   是否显示密码切换按钮    | boolean  | false  |
|     name      |         name属性          |  string  |   无   |

#### 3.1 事件支持

| 事件描述 |    事件名称    |
| :------: | :------------: |
|   blur   |  失去焦点事件  |
|  change  |  内容改变事件  |
|  focus   | 获取的焦点事件 |

### 4. switch组件

参数支持:

|    参数名     |      参数描述      | 参数类型 | 默认值 |
| :-----------: | :----------------: | :------: | :----: |
|    v-model    |      双向绑定      | Boolean  | false  |
|     name      |      name属性      |  string  |  text  |
|  activeColor  | 自定义的激活的颜色 |  string  |        |
| inactiveColor | 自定义的不激活颜色 |  string  |        |

#### 4.1 事件支持

| 事件描述 |      事件名称      |
| :------: | :----------------: |
|  change  | change时触发的事件 |

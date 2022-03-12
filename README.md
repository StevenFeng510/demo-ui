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

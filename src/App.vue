<template>
    <div id="app">
        <!-- <div class="row">
            <os-button @click="fn">按钮</os-button>
            <os-button type="primary">按钮</os-button>
            <os-button type="success">按钮</os-button>
            <os-button type="info">按钮</os-button>
            <os-button type="warning">按钮</os-button>
            <os-button type="danger">按钮</os-button>
        </div>

        <div class="row">
            <os-button>按钮</os-button>
            <os-button plain type="primary">按钮</os-button>
            <os-button plain type="success">按钮</os-button>
            <os-button plain type="info">按钮</os-button>
            <os-button plain type="warning">按钮</os-button>
            <os-button plain type="danger">按钮</os-button>
        </div>

        <div class="row">
            <os-button disabled>按钮</os-button>
            <os-button plain disabled type="primary">按钮</os-button>
            <os-button plain disabled type="success">按钮</os-button>
            <os-button plain disabled type="info">按钮</os-button>
            <os-button plain disabled type="warning">按钮</os-button>
            <os-button plain disabled type="danger">按钮</os-button>
        </div>

        <div class="row">
            <os-button round>按钮</os-button>
            <os-button round plain type="primary">按钮</os-button>
            <os-button round plain type="success">按钮</os-button>
            <os-button round plain type="info">按钮</os-button>
            <os-button round plain type="warning">按钮</os-button>
            <os-button round plain type="danger">按钮</os-button>
        </div> -->

        <!-- <os-input placeholder="请输入用户名" type="password" name="username" disabled></os-input>

        <os-input placeholder="请输入用户名" v-model="username"></os-input> -->

        <!-- v-model 实际上就是一个语法糖 等价于 -->
        <!-- <input type="text" :value="username" @input="username = $event.target.value" /> -->

        <os-input placeholder="请输入用户名" v-model="username" clearable></os-input>
        <os-input placeholder="请输入用户名" v-model="username"></os-input>
        <os-input
            placeholder="请输入密码"
            type="password"
            v-model="username"
            show-password
        ></os-input>

        <os-switch
            v-model="active"
            name="username"
            active-color="#00b894"
            inactive-color="#ff7675"
        ></os-switch>

        <!-- <os-radio label="1" v-model="gender">男</os-radio>
        <os-radio label="0" v-model="gender">女</os-radio>
        <os-radio label="2" v-model="gender"></os-radio>
        <os-radio label="3" v-model="gender"></os-radio>

        <os-radio-group v-model="gender">
            <os-radio label="4">男</os-radio>
            <os-radio label="5">女</os-radio>
        </os-radio-group> -->

        <!-- <os-checkbox v-model="active">是否选中</os-checkbox>

        <os-checkbox-group v-model="hobby">
            <os-checkbox label="抽烟"></os-checkbox>
            <os-checkbox label="喝酒"></os-checkbox>
            <os-checkbox label="烫头"></os-checkbox>
        </os-checkbox-group>

        <br /> -->
        <os-form :model="model">
            <os-form-item label="用户名" label-width="100px">
                <os-input placeholder="请输入用户名" v-model="model.username"></os-input>
            </os-form-item>
            <os-form-item label="选择">
                <os-switch v-model="model.active"></os-switch>
            </os-form-item>
        </os-form>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            // active: false,
            // hobby: ['抽烟'],
            model: {
                username: '',
                active: true,
            },
        };
    },
};
</script>

<style lang="scss">
#app {
    .row {
        .os-button {
            margin-right: 13px;
            margin-bottom: 10px;
        }
    }
    .os-input {
        width: 180px;
    }
}
</style>

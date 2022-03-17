<template>
    <div id="app">
        <!-- <os-input placeholder="请输入用户名" type="password" name="username" disabled></os-input> -->
        <!-- <os-input placeholder="请输入用户名" v-model="username"></os-input> -->

        <!-- v-model 实际上就是一个语法糖 等价于 -->
        <!-- <input type="text" :value="username" @input="username = $event.target.value" /> -->

        <!-- <os-input placeholder="请输入用户名" v-model="username" clearable></os-input>
        <os-input placeholder="请输入用户名" v-model="username"></os-input>
        <os-input
            placeholder="请输入密码"
            type="password"
            v-model="username"
            show-password
        ></os-input> -->

        <!-- <os-switch
            v-model="active"
            name="username"
            active-color="#00b894"
            inactive-color="#ff7675"
        ></os-switch> -->

        <os-radio label="1" v-model="gender">男</os-radio>
        <os-radio label="0" v-model="gender">女</os-radio>
        <os-radio label="2" v-model="gender"></os-radio>
        <os-radio label="3" v-model="gender"></os-radio>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            gender: '1',
        };
    },
};
</script>

<style lang="scss">
#app {
    .os-input {
        width: 180px;
    }
}
</style>

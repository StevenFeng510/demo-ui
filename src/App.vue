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
        </div>

        <div class="row">
            <os-button circle icon="os-icon-camera">圆</os-button>
            <os-button circle icon="os-icon-camera" plain type="primary">圆</os-button>
            <os-button circle icon="os-icon-camera" plain type="success">圆</os-button>
            <os-button circle icon="os-icon-camera" plain type="info">圆</os-button>
            <os-button circle icon="os-icon-camera" plain type="warning">圆</os-button>
            <os-button circle icon="os-icon-camera" plain type="danger">圆</os-button>
        </div>

        <div class="row">
            <os-button circle icon="os-icon-delete"></os-button>
            <os-button circle icon="os-icon-delete" plain type="primary"></os-button>
            <os-button circle icon="os-icon-delete" plain type="success"></os-button>
            <os-button circle icon="os-icon-delete" plain type="info"></os-button>
            <os-button circle icon="os-icon-delete" plain type="warning"></os-button>
            <os-button circle icon="os-icon-delete" plain type="danger"></os-button>
        </div> -->

        <os-dialog title="温馨提示"></os-dialog>

        <!-- <os-dialog>
            <template v-slot:title>
            </template>
        </os-dialog> -->
    </div>
</template>

<script>
export default {
    name: 'App',
    methods: {
        fn() {
            console.log(123);
        },
    },
};
</script>

<style lang="scss" scoped>
.row {
    margin-bottom: 20px;
    .os-button {
        margin-right: 20px;
    }
}
</style>

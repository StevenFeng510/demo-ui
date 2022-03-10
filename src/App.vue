<template>
    <div id="app">
        <div class="row">
            <os-button>按钮</os-button>
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
            <os-button round>按钮</os-button>
            <os-button round plain type="primary">按钮</os-button>
            <os-button round plain type="success">按钮</os-button>
            <os-button round plain type="info">按钮</os-button>
            <os-button round plain type="warning">按钮</os-button>
            <os-button round plain type="danger">按钮</os-button>
        </div>

        <div class="row">
            <os-button circle>圆</os-button>
            <os-button circle plain type="primary">圆</os-button>
            <os-button circle plain type="success">圆</os-button>
            <os-button circle plain type="info">圆</os-button>
            <os-button circle plain type="warning">圆</os-button>
            <os-button circle plain type="danger">圆</os-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
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

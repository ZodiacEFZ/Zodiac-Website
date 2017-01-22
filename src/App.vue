<template>
    <div id="app">
        <el-menu theme="dark" :default-active="active" class="el-menu-demo nav-bar" mode="horizontal" router="true">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/team">队伍</el-menu-item>
        </el-menu>
        <div class="view-container">
            <transition name="component-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <partial-footer></partial-footer>
    </div>
</template>

<script>
import Footer from './partials/Footer.vue'
export default {
    components: {
        'partial-footer': Footer
    },
    data: function() {
        var active = '/';
        if (this.$route.path.includes('/team'))
            active = '/team';
        return {
            active
        }
    }
}
</script>

<style>
    body {
      font-family: Helvetica, sans-serif;
    }

    .nav-bar {
        width: 100%;
        border-radius: 0;
    }

    .view-container {
        min-height: 50vh;
        width: 100%;
    }

    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }

    .component-fade-enter, .component-fade-leave-active {
        opacity: 0;
    }
</style>

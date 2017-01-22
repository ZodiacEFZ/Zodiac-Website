<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="redirect">
            <el-tab-pane label="CAD 组" name="cad"></el-tab-pane>
            <el-tab-pane label="机电组" name="engineer"></el-tab-pane>
            <el-tab-pane label="编程组" name="program"></el-tab-pane>
            <el-tab-pane label="商务与宣传组" name="commercial"></el-tab-pane>
        </el-tabs>
        <transition name="component-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    module.exports = {
        name: 'team',
        data: function() {
            return {
                activeName: this.$route.name || 'cad'
            }
        },
        methods: {
            redirect(tab) {
                this.$router.push('/team/' + tab.name);
            }
        }
    }
</script>
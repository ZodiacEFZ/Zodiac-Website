<template>
    <div class="full">
        <div class="teamer-container">
            <h1>{{ title }}</h1>
            <h3>{{ introduction }}</h3>
            <div class="teamer-display">
                <div v-for="teamer in teamers" class="teamer">
                    <el-card :body-style="{ padding: '0px' }">
                        <img :src="teamer.img" class="image">
                        <div style="padding: 14px;">
                            <b>{{teamer.name}}</b><br/>
                            <span>{{teamer.introduction}}</span>
                        </div>
                    </el-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'introduction', 'teamers']
    }
</script>

<style scoped>
    .full {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .teamer-container {
        max-width: 100rem;
        padding: 1rem;
    }

    .teamer-display {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .teamer {
        width: 10rem;
        margin: .5rem;
    }
</style>
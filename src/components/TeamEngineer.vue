<template>
    <partial-teamer-list :title="title" :introduction="introduction" :teamers="teamers"></partial-teamer-list>
</template>

<script>
    import TeamerList from '../partials/TeamerList.vue'

    export default {
        components: {
            'partial-teamer-list': TeamerList
        },
        data() {
            return {
                title: '狂拽酷帅叼炸天的机电组',
                introduction: '机电组很嘿嘿嘿',
                teamers: [
                    {
                        'name': '袁吉吉',
                        'introduction': '一只皮卡丘',
                        'img': '/src/assets/image/avatar.jpeg'
                    }, {
                        'name': '袁吉吉',
                        'introduction': '一只皮卡丘',
                        'img': '/src/assets/image/avatar.jpeg'
                    }, {
                        'name': '袁吉吉',
                        'introduction': '一只皮卡丘',
                        'img': '/src/assets/image/avatar.jpeg'
                    }, {
                        'name': '袁吉吉',
                        'introduction': '一只皮卡丘',
                        'img': '/src/assets/image/avatar.jpeg'
                    }
                ]
            }
        }
    }
</script>
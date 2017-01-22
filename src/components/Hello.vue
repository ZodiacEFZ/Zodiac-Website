<template>
    <div class="w3-content" style="max-width:2000px;">

        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in carousel">
                <h3>{{ item.text }}</h3>
                <img :src="item.img" width="100%" height="auto"/>
            </el-carousel-item>
        </el-carousel>
        <!-- tags -->
        <div class="w3-row w3-white w3-padding-64">
            <div class="w3-col w3-container m2">
            </div>
            <div class="w3-col w3-container m4">
                <br>
                <span class="w3-wide t_lg">我们</span>
                <span class="w3-wide t_md">是</span>
                <span class="w3-wide t_lg">Zodiac</span>
                <p class="w3-opacity t_sm"><i>这里本来应该放关于学校队伍人员导师的一句话介绍</i></p>
            </div>
            <div class="w3-col w3-container m3">
                <img src="../assets/image/section-1.png" style="width:80%">
            </div>
            <div class="w3-col w3-container m3">
            </div>
        </div>

        <div class="w3-row w3-light-grey w3-padding-64">
            <div class="w3-col w3-container m3">
            </div>
            <div class="w3-col w3-container m3">
                <img src="../assets/image/section-2.png" style="width:80%">
            </div>
            <div class="w3-col w3-container m4">
                <br>
                <span class="w3-wide t_md">在</span>
                <span class="w3-wide t_lg">赛场</span>
                <span class="w3-wide t_md">上</span>
                <span class="w3-wide t_lg">驰骋</span>
                <p class="w3-opacity t_sm"><i>team5363在赛场下的一点一滴。上了赛场又会迎来怎样的。。</i></p>
            </div>
            <div class="w3-col w3-container m2">
            </div>
        </div>

        <div class="w3-row w3-white w3-padding-64">
            <div class="w3-col w3-container m2">
            </div>
            <div class="w3-col w3-container m4">
                <br>
                <span class="w3-wide t_lg">背后</span>
                <span class="w3-wide t_md">的</span>
                <span class="w3-wide t_lg">支持者</span>
                <p class="w3-opacity t_sm"><i>每个成功的队伍背后总少不了支（you）持（qian）者（人）</i></p>
            </div>
            <div class="w3-col w3-container m3">
                <img src="../assets/image/section-3.png" style="width:80%">
            </div>
            <div class="w3-col w3-container m3">
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        name: 'hello',
        data: function() {
            return {
                greeting: 'Hello',
                carousel: [
                    {
                        text: '嘿嘿嘿',
                        img: 'src//assets/image/2.jpg'
                    }, {
                        text: '嘿嘿嘿嘿',
                        img: 'src/assets/image/4.jpg'
                    }, {
                        text: '嘿嘿嘿嘿嘿',
                        img: 'src/assets/image/6.jpg'
                    },
                ]
            }
        }
    };
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #FFFFFF;
        font-size: 4rem;
        position: absolute;
        bottom: 2rem;
        left: 2.5rem;
        text-shadow: 0 0 1rem #555;
    }

    .t_lg {
        font-size: 48px;
        font-family: 'Tangerine', serif;
    }

    .t_md {
        font-size: 30px;
    }

    .t_sm {
        font-size: 24px;
    }
</style>
<template>
<div class="w3-black">
    <div class="w3-container w3-content w3-padding-64" style="max-width:800px">
        <h2 class="w3-wide w3-center">联系 · 我们</h2>
        <div class="w3-row">
            <div class="w3-col w3-container m3">
            </div>
            <div class="w3-col w3-container m9">
                <br>
                <p><img src="../assets/icon/email.png" style="height:24px"><i>&nbsp &nbsp Email：{{ Email }}</i></p>
                <p><img src="../assets/icon/github.png" style="height:24px"><i>&nbsp &nbsp GitHub：{{ GitHub }}</i></p>
                <p><img src="../assets/icon/twitter.png" style="height:24px"><i>&nbsp &nbsp Twitter：{{ Twitter }}</i></p>
                <p><img src="../assets/icon/youtube.png" style="height:24px"><i>&nbsp &nbsp YouTube：{{ YouTube }}</i></p>
                <p><img src="../assets/icon/add.png" style="height:24px"><i>&nbsp &nbsp Address：{{ Address }}</i></p>
                <p><img src="../assets/icon/tel.png" style="height:24px"><i>&nbsp &nbsp Tel：{{ Tel }} </i></p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    module.exports = {
        name: 'my-footer',
        data: function() {
            return {
                Email: 'contact@team6353.com <contact@team6353.com>',
                GitHub: '@ZodiacEFZ',
                Twitter: '@team6353',
                YouTube: '@Zodiac Robotics',
                Address: '晨晖路555号 / 祖冲之路736号',
                Tel: '4008-123-123 每周一至周五 9a.m. ~ 5p.m.',
            }
        }
    }
</script>

<style scoped>
</style>
<template>
    <section>
        <Swipe :autoplay="3000" lazy-render loop touchable height="250">
            <!-- 加层盒子套flex不然轮播图是纵向的 -->
            <div class="flex">
                <SwipeItem>
                    <img src="http://123.60.208.96:3000/images/home/banner5.jpg" />
                </SwipeItem>
                <SwipeItem>
                    <img src="http://123.60.208.96:3000/images/home/banner6.jpg" />
                </SwipeItem>
                <SwipeItem>
                    <img src="http://123.60.208.96:3000/images/home/banner7.jpg" />
                </SwipeItem>
                <SwipeItem>
                    <img src="http://123.60.208.96:3000/images/home/banner8.jpg" />
                </SwipeItem>
            </div>
        </Swipe>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swipe, SwipeItem } from 'vant';


</script>

<style scoped lang="scss">
section {
    width: 100vw;
    overflow: hidden;

    .van-swipe__track {
        display: flex !important;
    }
}
</style>
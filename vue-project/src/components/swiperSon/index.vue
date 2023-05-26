<template>
    <section>
        <swipe :loop="false" width="240" height="90">
            <div class="flex">
                <swipe-item>
                    <img src="http://123.60.208.96:3000/images/home/test11.png" />
                </swipe-item>
                <swipe-item>
                    <img src="http://123.60.208.96:3000/images/home/test10.png" />
                </swipe-item>
                <swipe-item>
                    <img src="http://123.60.208.96:3000/images/home/test12.jpg" />
                </swipe-item>
            </div>
        </swipe>
    </section>
</template>

<script setup lang="ts">
import { Swipe, SwipeItem } from 'vant';

</script>

<style scoped lang="scss">
section {
    width: 100vw;
    overflow: hidden;
    height: 90px;
    margin-top: 15px;

    .flex {
        padding-right: 25px;

        &>div {
            width: 240px;
            height: 90px;
            padding-left: 25px;
        }
    }
}</style>
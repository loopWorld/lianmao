<template>
    <Swipe class="my-swipe" :autoplay="3000" width="375px" height="250" indicator-color="white">
        <SwipeItem>
            <img src="@/images/home/banner5.jpg" />
        </SwipeItem>
        <SwipeItem>
            <img src="@/images/home/banner6.jpg" />
        </SwipeItem>
        <SwipeItem>
            <img src="@/images/home/banner7.jpg" />
        </SwipeItem>
        <SwipeItem>
            <img src="@/images/home/banner8.jpg" />
        </SwipeItem>
    </Swipe>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swipe, SwipeItem } from 'vant';

</script>

<style scoped></style>
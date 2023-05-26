<template>
    <section>
        <header>
            <div class="imgBox" @click="router.back()">
                <img src="http://123.60.208.96:3000/images/svgs/white-btn.svg" />
            </div>
            <div class="headerTitle">收货地址</div>
        </header>
        <div class="addressList">
            <addressItem v-for="item in address" :key="item.id" :data="item" />
        </div>
        <div class="addressBtn">
            <button @click="router.push({ name: 'incrementAddress' })"> <span>+</span> 新增地址 </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import addressItem from '@/components/addressItem/index.vue';
import { nanoid } from 'nanoid';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

interface addressObj {
    name: string,
    address: string,
    tel: string,
    id: string,
    type: string,
    isSelected: boolean
}

const router = useRouter()

let address = ref<Array<addressObj>>([
    {
        name: '小黑子',
        address: '广东省深圳市宝安区福永地铁站c出口',
        tel: '1888888888',
        id: nanoid(),
        type: '家',
        isSelected: true
    },
    {
        name: '小黑子',
        address: '广东省深圳市宝安区福永地铁站c出口',
        tel: '1888888888',
        id: nanoid(),
        type: '公司',
        isSelected: false
    },
    {
        name: '小黑子',
        address: '广东省深圳市宝安区福永地铁站c出口',
        tel: '1888888888',
        id: nanoid(),
        type: '学校',
        isSelected: false
    }
])

    ; (() => {
        if (history.state != '') {
            address.value.push(history.state)
        }
    })()

</script>

<style scoped lang="scss">
section {
    width: 100%;
    padding: 0 16px;

    header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px;

        .imgBox {
            width: 24px;
            height: 24px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .headerTitle {
            text-align: center;
            font-size: 18px;
            color: #3a3a3a;
            flex: 1;
            font-weight: 600;
        }
    }

    .addressBtn {
        position: fixed;
        bottom: 10px;
        width: 92%;

        button {
            width: 100%;
            outline: none;
            height: 42px;
            border: 1px solid #f44;
            color: #f44;
            background: #fff;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                display: block;
                transform: scale(2);
                margin-right: 10px;
            }
        }
    }
}
</style>
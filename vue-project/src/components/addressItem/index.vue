<template>
    <section>
        <div class="addressContainer">
            <div class="cardTriangle" :class="{ active: isSelected }"></div>
            <div class="addresSvg">
                <img :src="svgType" />
            </div>
            <div class="cardInfo">
                <div class="infoName">
                    <span>{{ name }}</span>
                    <span class="TYPE">{{ type }}</span>
                </div>
                <div class="infoAddress">
                    <span>{{ address }}</span>
                    <div> > </div>
                </div>
                <div class="infoTel">{{ tel }}</div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const prop = defineProps(['data', 'incrementAddress'])
const { name, address, tel, type, isSelected } = prop.data
const svgType = computed(() => {
    switch (type) {
        case '家': return 'http://123.60.208.96:3000/images/svgs/address-home.svg'
        case '学校': return 'http://123.60.208.96:3000/images/svgs/address-company.svg'
        case '公司': return 'http://123.60.208.96:3000/images/svgs/address-school.svg'
    }
})
</script>

<style scoped lang="scss">
section {
    margin-top: 10px;
    padding: 0;
    .addressContainer {
        padding: 16px 0;
        background: #fff;
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        border-radius: 10px;
        height: 100px;

        .cardTriangle {
            position: absolute;
            top: -10px;
            right: -125px;
            width: 230px;
            height: 63px;
            transform: rotate(45deg);
            box-shadow: 0 0 4px 2px #ccc;
            background: #949497;
        }

        .cardTriangle.active {
            background: #d8182d;
        }

        .addresSvg {
            padding: 10px 16px;
            border: 0px solid #efeff4;
            border-right-width: 1px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 24px;
                height: 24px;
            }
        }
        .cardInfo {
            font-size: 12px;
            color: #3a3a3a;
            padding-left: 16px;
            display: flex;
            flex-direction: column;
            flex: 1;
            .infoName {
                font-size: 13px;
                font-weight: 600;
                display: flex;
                justify-content: space-between;
                .TYPE {
                    position: absolute;
                    top: 6px;
                    right: 0;
                    padding-right: 8px;
                    color: #fff;
                    font-weight: 0;
                    font-size: 12px;
                }
            }
            .infoAddress {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 6px 18px 6px 0;
            }
        }
    }
}</style>
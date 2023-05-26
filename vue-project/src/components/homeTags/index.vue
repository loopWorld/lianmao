<template>
    <section>
        <ul>
            <li>
                <img src="http://123.60.208.96:3000/images/svgs/chain-cat-boutique.svg" />
                <span>链猫精品</span>
            </li>
            <li>
                <img src="http://123.60.208.96:3000/images/svgs/cm-area.svg" />
                <span>CM专区</span>
            </li>
            <li>
                <img src="http://123.60.208.96:3000/images/svgs/collar-cm.svg" />
                <span>领CM币</span>
            </li>
            <li>
                <img src="http://123.60.208.96:3000/images/svgs/coupon-svg.svg" />
                <span>领券</span>
            </li>
            <li>
                <img src="http://123.60.208.96:3000/images/svgs/chain-cat-member.svg" />
                <span>链猫会员</span>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
section {
    margin-top: 20px;
    width: 100vw;
    ul {
        width: 100%;
        height: 61px;
        display: flex;
        align-items: center;
        justify-content: space-around;  
        li {
            width: 48px;
            height: 60px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            img {
                width: 41px;
                height: 41px;
            }
            span {
                font-size: 12px;
                color: #3a3a3a;
            }
        }
    }
}
</style>
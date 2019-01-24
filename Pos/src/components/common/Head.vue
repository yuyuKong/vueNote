<template>
    <div class="head">
        <a href="" class="logo">
            <img src="../../assets/img/logo.png" alt="">
        </a>
        <img src="../../assets/img/slogan.png" alt="" class="slogan">
        <a href="" class="app">App开发</a>
        <ul class="nav">
            <li>
                <img src="../../assets/img/nav_bg.jpg" alt="">
                <span>首页</span>
            </li>
            <li>
                <img src="../../assets/img/nav_bg.jpg" alt="">
                <span>关于</span>
            </li>
            <li>
                <img src="../../assets/img/nav_bg.jpg" alt="">
                <span>案例</span>
            </li>
            <li>
                <img src="../../assets/img/nav_bg.jpg" alt="">
                <span>服务</span>
            </li>
            <li>
                <img src="../../assets/img/nav_bg.jpg" alt="">
                <span>动态</span>
            </li>
            <li>
                <img src="../../assets/img/nav_bg.jpg" alt="">
                <span>联系</span>
            </li>
            <li>
                <img src="../../assets/img/nav_bg.jpg" alt="">
                <span>股票点买</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Head',
        data () {
            return {

            }
        }
    }
</script>


<style scoped>
    .head{
        width:100%;
        height: 70px;
        background-color: white;
        border-bottom:1px solid #D6D6D6;
    }
    .logo{
        display: block;
        width: 114px;
        height: 146px;
        position: absolute;
        left: 3%;
        z-index: 99999;
    }
    .logo img{
        display: block;
        width:100%;
        height:100%;
    }
    .slogan{
        position: absolute;
        left: 184px;
        top: 27px;
    }
    .app{
        position: absolute;
        left: 550px;
        top: 27px;
        font-size: 14px;
        border: 1px solid #aaa;
        padding: 2px 4px;
        text-decoration: none;
        color: #666;
    }
    .nav{
        float: right;
        margin-right: 45px;
    }
    .nav li{
        float: left;
        width: 100px;
        height: 69px;
        line-height: 69px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        border-right: 1px solid #eee;
        position: relative;
    }
    .nav li img{
        width: 100%;
        height:100%;
        position: absolute;
        top:-69px;
        left:0;
        transition: all .33s ease-out;
    }
    .nav li:hover img{
        transform:translateY(69px);
    }
    .nav_animate{
        transform:translateX(69px);
    }

    .nav li span{
        position: absolute;
        z-index: 10;
        left: 0;
        right:0;
        margin:auto;
    }

</style>
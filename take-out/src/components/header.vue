<template>
  <div class="header-wrap">
    <!--头部照片和文字 用inline-block布局  消除inline-block间缝隙方法-->
    <div class="header-title">
      <div class="avatar"><img style="width:80px;height:70px;" src="../assets/dxc.jpeg"/></div>
      <div class="header-content">
        <div class="name"> {{seller.name}}</div>
        <div class="content"> {{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div v-if="seller.supports" class="supports">
          <span class="icon" :class="getClass[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <span class="link">&gt</span>
      </div>
    </div>

    <!--公告部分-->
    <div class="header-advertise" @click="showDetail">
      <span class="advertise-title"></span>
      <span class="advertise-text">{{seller.advertise}}</span>
    </div >

    <!--头部背景图片设置 filter:blur(10px)  z-index:-1 position:absolute width/height left/top-->
    <div class="background"></div>

    <!--细节图层部分-->
    <div v-show="showdetail" class="detail">
      <!--sticky footer 布局-->
      <div class="detail-wraper">
        <div class="detail-main">
          <div class="name">{{seller.name}}</div>
          <div class="test"></div>
        </div>
      </div>
      <div class="detail-close" @click="showDetail"><div class="icon-cross"></div></div>
    </div>
  </div>
</template>
<script>
  export default{
    props: ['seller'],
    data () {
      return {
        showdetail: false
      }
    },
    methods: {
      showDetail () {
        this.showdetail = !this.showdetail
      }
    },
    computed: {
      getClass () {
        return ['decrease', 'discount']
      }
    }
  }
</script>
<style scoped>
  .header-wrap {
    position: relative;
    color: white;
    background: rgba(0, 0, 0, 0.6);

  }

  .background {
    position: absolute;
    background-image: url('../assets/dxc.jpeg');
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }

  .header-title {
    padding: 24px 12px 18px 12px;
    font-size: 0;
    position: relative;
  }

  .avatar {
    display: inline-block;
  }

  .avatar img {
    border-radius: 2px;
  }

  .header-content {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    margin-left: 10px;
  }

  .name {
    margin: 2px 0 10px 0;
    font-size: 16px;
    font-weight: bold;
  }

  .content {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .supports .icon {
    display: inline-block;
    height: 14px;
    width: 14px;
    vertical-align: middle;
  }

  .supports .text {
    vertical-align: middle;
    font-size: 12px;
  }

  @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2) {
    .decrease {
      background-image: url("../assets/decrease.jpeg");
      background-size: 14px 14px;
    }
  }

  .support-count {
    position: absolute;
    right: 12px;
    bottom: 18px;
    padding: 5px 8px;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
    font-size: 14px;
  }

  .link {
    font-weight: bold;
    font-size: 10px;
    magin-left: 3px;
  }

  .header-advertise {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(0, 0, 0, 0.3);
  }

  .advertise-title {
    display: inline-block;
    background-image: url('../assets/gonggao.jpeg');
    width: 30px;
    height: 20px;
    line-height: 18px;
    -webkit-background-size: 30px 18px;
    background-size: 30px 18px;
    margin-top: -4px;
    padding: 0;
    border-radius: 5px;
    vertical-align: middle;
  }

  .advertise-text {
    font-size: 12px;
  }

  .detail {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(7, 17, 27, 0.8);
    top: 0;
    left: 0;
  }
  .detail-wraper{
    min-height:100%;
  }
  .detail-main{
    padding: 70px;
  }
  .detail-close{
    margin-top: -50px;
    text-align: center;
  }
  .icon-cross{
    display: inline-block;
    border-radius: 15px;
    background: rgba(0,0,0,0.8);
    width:30px;
    height:30px;
    vertical-align: middle;
    line-height: 30px;
    font-weight:lighter;
    font-size: 24px;
  }
  .icon-cross:before{
    content: "\2613";
  }
  .detail .name{
    font-size: 25px;
    text-align: center;
    line-height: 30px;
  }

</style>

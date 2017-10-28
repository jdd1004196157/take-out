<template>
  <div id="app1">
    <headerCom :seller="seller"></headerCom>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/comments">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/stores">商家</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import headerCom from './components/header.vue'
  export default {
    components: {headerCom},
    data () {
      return {
        seller: {}
      }
    },
    created () {
      this.$http.get('/api/getseller').then((res) => {
        res = res.body
        if (res.errno === 0) {
          this.seller = res.data
        }
      })
    }
  }
</script>

<style scoped>
  .tab {
    display: flex;
    width: 100%;
    height: 40px; /* 设计稿高度除以DPI*/
    line-height: 40px;
    /*border-bottom: 1px solid rgba(7,17,27,0.1);*/
    position: relative;
  }

  /*一像素边框*/
  @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2) {
    .tab:after {
      position: absolute;
      left: 0;
      bottom: 0;
      content: '';
      width: 100%;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      transform: scaleY(0.5);
    }
  }

  @media (-webkit-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5) {
    .tab:after {
      position: absolute;
      left: 0;
      bottom: 0;
      content: '';
      width: 100%;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      transform: scaleY(0.7);
    }
  }

  /*一像素边框*/
  .tab-item {
    flex: 1;
    text-align: center;
  }

  a {
    display: block;
    color: rgb(77, 85, 93);
    font-size: 14px;
  }

  a.active { /*注意区分a .active 这时候是a下面的类为active的元素*/
    color: rgb(240, 20, 20);
  }
</style>

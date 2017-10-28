<template>
  <div class="goods">
    <div class="menu-wraper">
      <ul>
        <li v-for="(item,index) in goods" @click='changestyle(index)' class="menu-item" :class="{'actived':item.flag}">
          <span><a :href="'#'+item.name">{{item.name}}</a></span>
        </li>
      </ul>
    </div>
    <div class="goods-wraper">
      <ul>
        <li v-for="item in goods" class="food-item">
          <div class="item-title" :id="item.name">{{item.name}}</div>
          <ul>
            <li v-for="i in item.foods" class="food-detail">
              <div class="food-img"></div>
              <div class="food-description">
                <div class="food-title">{{i.name}}</div>
                <div class="food-num">月销售{{i.num}}份</div>
                <div class="food-price">¥{{i.price}}</div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    methods: {
      changestyle (index) {
        this.goods.map(function (item) {
          if (item.flag) {
            item.flag = false
          }
        })
        this.goods[index].flag = true
      }
    },
    data () {
      return {
        goods: []
      }
    },
    created () {
      this.$http.get('api/getgoods').then((res) => {
        res = res.body
        this.goods = res.data.map(function (item, index) {
          if (index) {
            item['flag'] = false
          } else {
            item['flag'] = true
          }
          return item
        })
      })
    }
  }
</script>
<style scoped>
  a {
    color: black
  }

  .goods {
    display: flex;
    position: absolute;
    top: 180px;
    width: 100%;
    bottom: 60px;
    overflow: hidden;
  }

  .menu-wraper {
    width: 89px;
    background: #f3f5f7;
  }

  .menu-item {
    display: table;
    height: 56px;
    width: 100%;
    line-height: 15px;
    text-align: center;
    font-size: 14px;
    position: relative;
  }

  .actived {
    background: white;
  }

  @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2) {
    .menu-item:after {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 0;
      width: 80%;
      border-bottom: 1px solid #eee;
      content: '';
      transform: scaleY(0.5);
    }
  }

  .menu-item span {
    display: table-cell;
    vertical-align: middle;
  }

  .goods-wraper {
    flex: 1;
    padding-left: 10px;
    overflow: auto;
  }

  .item-title {
    position: relative;
    font-size: 14px;
    color: black;
    line-height: 30px;
    font-weight: normal;
  }

  .item-title:after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid #ccc;
    content: '';
    transform: scaleY(0.5);
  }

  .food-detail {
    display: flex;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .food-img {
    background: url("../assets/food.jpg");
    width: 60px;
    height: 60px;
    background-size: 60px 60px;
    border-radius: 5px;
  }

  .food-description {
    flex: 1;
    margin-left: 10px;
  }

  .food-num {
    font-size: 12px;
    color: #2c3e50;
    line-height: 20px;
  }

  .food-price {
    color: red;
    line-height: 30px;
  }
</style>

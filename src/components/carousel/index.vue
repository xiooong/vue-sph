<template>
  <!--banner轮播-->
  <div class="swiper-container" ref="mySwiper">
    <!-- swiper-wrapper里面每一个slider即为一张图片 -->
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["bannerList"],
  watch: {
    // 监听bannerList变化（因为这条数据在state里从空的变成接口的数据）
    bannerList: {
      immediate: true,
      // 监听bannerList属性值变化
      // 如果执行handler，代表组件实例身上这个属性（bannerList）的属性值已经有了
      // 但只能保证该属性有数据，不能保证数据已经被遍历出来了（v-for）
      // nextTick：在下次DOM更新循环结束（获取到服务器数据存在state且遍历到DOM上）之后执行延迟回调
      handler() {
        this.$nextTick(() => {
          //初始化Swiper类的实例
          var mySwiper = new Swiper(this.$refs.mySwiper, {
            //设置轮播图防线
            direction: "horizontal",
            //开启循环模式
            loop: true,
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              //分页器类型
              type: "bullets",
              //点击分页器，切换轮播
              clickable: true,
            },
            //自动轮播
            autoplay: {
              delay: 1000,
              //新版本的写法：目前是5版本
              // pauseOnMouseEnter: true,
              //如果设置为true，当切换到最后一个slide时停止自动切换
              stopOnLastSlide: true,
              //用户操作swiper之后，是否禁止autoplay
              disableOnInteraction: false,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            //切换效果
            // effect: "cube",
          });
          1;
          //1:swiper插件,对外暴露一个Swiper构造函数
          //2:Swiper构造函数需要传递参数 1、结构总根节点CSS选择器|根节点真实DOM节点  2、轮播图配置项
          //鼠标进入停止轮播
          mySwiper.el.onmouseover = function () {
            mySwiper.autoplay.stop();
          };
          //鼠标离开开始轮播
          mySwiper.el.onmouseout = function () {
            mySwiper.autoplay.start();
          };
        });
      },
    },
  },
};
</script>

<style>
</style>
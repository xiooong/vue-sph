<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leavemouse" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" @click="gosearch" v-show="showSort">
            <div class="all-sort-list2">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ cur: currentIndex == index }"
              >
                <h3 @mouseenter="changeIndex(index)" @click="gosearch">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                  <!-- <router-link to="/search">{{ c1.categoryName }}</router-link> -->
                </h3>
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <!-- <div class="item" v-for="c1 in categoryList" :key="c1.categoryId">
            <h3>
              <a href="">{{c1.categoryName}}</a>
            </h3>
            <div class="item-list clearfix" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">电子书1</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">免费</a>
                    </em>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">数字音乐</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">通俗流行</a>
                    </em>
                    <em>
                      <a href="">古典音乐</a>
                    </em>
                    <em>
                      <a href="">摇滚说唱</a>
                    </em>
                    <em>
                      <a href="">爵士蓝调</a>
                    </em>
                    <em>
                      <a href="">乡村民谣</a>
                    </em>
                    <em>
                      <a href="">有声读物</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">音像</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">音乐</a>
                    </em>
                    <em>
                      <a href="">影视</a>
                    </em>
                    <em>
                      <a href="">教育音像</a>
                    </em>
                    <em>
                      <a href="">游戏</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>文艺</dt>
                  <dd>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">青春文学</a>
                    </em>
                    <em>
                      <a href="">传记</a>
                    </em>
                    <em>
                      <a href="">艺术</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>人文社科</dt>
                  <dd>
                    <em>
                      <a href="">历史</a>
                    </em>
                    <em>
                      <a href="">心理学</a>
                    </em>
                    <em>
                      <a href="">政治/军事</a>
                    </em>
                    <em>
                      <a href="">国学/古籍</a>
                    </em>
                    <em>
                      <a href="">哲学/宗教</a>
                    </em>
                    <em>
                      <a href="">社会科学</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>经管励志</dt>
                  <dd>
                    <em>
                      <a href="">经济</a>
                    </em>
                    <em>
                      <a href="">金融与投资</a>
                    </em>
                    <em>
                      <a href="">管理</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>生活</dt>
                  <dd>
                    <em>
                      <a href="">家庭与育儿</a>
                    </em>
                    <em>
                      <a href="">旅游/地图</a>
                    </em>
                    <em>
                      <a href="">烹饪/美食</a>
                    </em>
                    <em>
                      <a href="">时尚/美妆</a>
                    </em>
                    <em>
                      <a href="">家居</a>
                    </em>
                    <em>
                      <a href="">婚恋与两性</a>
                    </em>
                    <em>
                      <a href="">娱乐/休闲</a>
                    </em>
                    <em>
                      <a href="">健身与保健</a>
                    </em>
                    <em>
                      <a href="">动漫/幽默</a>
                    </em>
                    <em>
                      <a href="">体育/运动</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>科技</dt>
                  <dd>
                    <em>
                      <a href="">科普</a>
                    </em>
                    <em>
                      <a href="">IT</a>
                    </em>
                    <em>
                      <a href="">建筑</a>
                    </em>
                    <em>
                      <a href="">医学</a>
                    </em>
                    <em>
                      <a href="">工业技术</a>
                    </em>
                    <em>
                      <a href="">电子/通信</a>
                    </em>
                    <em>
                      <a href="">农林</a>
                    </em>
                    <em>
                      <a href="">科学与自然</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>少儿</dt>
                  <dd>
                    <em>
                      <a href="">少儿</a>
                    </em>
                    <em>
                      <a href="">0-2岁</a>
                    </em>
                    <em>
                      <a href="">3-6岁</a>
                    </em>
                    <em>
                      <a href="">7-10岁</a>
                    </em>
                    <em>
                      <a href="">11-14岁</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div> -->
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###" ref="test">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 引入方式，把lodash全部功能函数引入
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      showSort: true,
    };
  },
  mounted() {
    
    if (this.$route.path != "/home") {
      this.showSort = false;
    }
  },
  computed: {
    ...mapState({
      // 右侧需要的是一个函数，当使用这个计算属性时，右侧函数会立即执行一次
      // 注入一个参数state（大仓库中的数据）
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    gosearch(event) {
      //获取点击事件元素节点
      const element = event.target;
      //获取该元素属性并解构出categoryname（被浏览器转为小写）
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;
      //判断是否有categoryname属性，有该属性的一定是需要跳转事件的标签
      if (categoryname) {
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        //如果对应元素上存在这个id，就传对应的query
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else if (category3id) {
          query.category3Id = category3id;
        }

        if(this.$route.params){
          location.params = this.$route.params
        }

        location.query = query;
        this.$router.push(location);
      }
    },

    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),

    leavemouse() {
      this.currentIndex = -1;
      if (this.$route.path != "/home") {
        this.showSort = false;
      }
    },

    enterShow() {
      this.showSort = true;
    },
  },
};
</script>

<style lang='less' scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        // height: 450px;
        // overflow: hidden;
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
              text-decoration: none;
            }
          }

          .item-list {
            // display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
        .cur {
          background-color: skyblue;
          cursor: pointer;
        }
      }
    }

    .sort-enter {
      height: 0;
      // transform: rotate(0deg); //旋转动画初始0度
    }

    .sort-enter-to {
      height: 210px;
      // transform: rotate(365deg);   //365度
    }

    .sort-enter-active {
      transition: all .1s linear;
    }
  }
}
</style>
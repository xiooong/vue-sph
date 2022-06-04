<template>
  <div class="pagination">
    <button 
      :disabled="pageNo == 1" 
      @click="$emit('getPageNo', pageNo - 1)"
    >
      上一页
    </button>
    <button  v-show="this.startAndEnd.start > 1" @click="$emit('getPageNo', 1)">
      1
    </button>
    <button v-show="this.startAndEnd.start > 2">···</button>

    <button
      :class="{active: pageNo == page}"
      v-for="page in this.startAndEnd.continueArray"
      :key="page"
      @click="$emit('getPageNo', page)"
    >
      {{ page }}
    </button>

    <button v-show="this.startAndEnd.end < totalPage - 1">···</button>
    <button
      v-show="this.startAndEnd.end < totalPage"
      @click="$emit('getPageNo', totalPage)"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo == totalPage"
      @click="$emit('getPageNo', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共{{ total }}条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
        // isClick: -1
    };
  },
  props: {
    pageNo: {
      type: Number,
      required: true,
      default: 1,
    },
    pageSize: {
      type: Number,
      required: true,
      default: 10,
    },
    total: {
      //   type: Number,
      required: true,
    },
    continues: {
      type: Number,
      required: true,
      default: 5,
    },
    
  },
  computed: {
    // 计算总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize); //向上取整
    },
    startAndEnd() {
      const { pageNo, totalPage, continues } = this;
      let start = 1, end = 5;
      let continueArray = [];
      let startAndEndObj = {};
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        } else if (end > totalPage) {
          end = totalPage;
          start = totalPage - continues;
        }
      }
      for (let page = start; page <= end; page++) {
        continueArray.push(page);
      }
      // 将三个参数赋值给startAndEndObj对象
      startAndEndObj.start = start;
      startAndEndObj.end = end;
      startAndEndObj.continueArray = continueArray;

      return startAndEndObj;
    },
  },
  methods: {
  },
  mounted() {
    //   console.log(this.startAndEnd)
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }
    
  }
  .active {
    //   cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
}
</style>

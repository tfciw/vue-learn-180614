<template>
  <div class="draggle">
    <!-- <checkbox></checkbox>
    <checkbox></checkbox> -->
    <div class="left">
      <div class="widget_item" @dragstart="dragstart" draggable="true" tag="checkbox">
        <span class="title">单选框</span>
      </div>
      <div class="widget_item" @dragstart="dragstart" draggable="true" tag="inputtext">
        <span class="title">文本输入框</span>
      </div>
      <div class="widget_item" @dragstart="dragstart" draggable="true" tag="twocloumn">
        <span class="title">两列</span>
      </div>
    </div>
    <div class="right" @drop="drop">
        <!-- 防止元素的容器 -->
        <component :is="item.component" :text="item.text" v-for="(item, index) in items" :key="index"></component>
    </div>
    <div class="right_right">
      
    </div>
  </div>
</template>
<script>
import checkbox from './checkbox/checkbox';
import inputtext from './text/inputtext';
import twocloumn from './twocolumn/twocloumn'
export default {
  name: 'draggle',
  data() {
    return {
      tag: '',
      items: []
    }
  },
  components: {
    checkbox,
    inputtext,
    twocloumn
  },
  mounted() {
    // console.log(checkbox);
    window.addEventListener('dragover', function(e) {
      e.preventDefault();
    });
  },
  methods: {
    dragstart(e) {
      let tag = e.target.getAttribute('tag');
      // console.log(tag);
      e.dataTransfer.setData('tag', tag);
    },
    drop(e) {
      let tag = e.dataTransfer.getData('tag');
      this.tag = tag;
      if( e.target == document.querySelector('.right') ) {
        this.items.push({
         component: tag
        })
      }
      // 如果可以实现直接向target添加 checkbox 组件，并且数据也能动态获取，那就最棒了，之所以这样想是因为，既然vue都实现了virtualDom，为什么还要使用创建元素的形式。所以向大家求助，支个招。thks everybody 。
      //这块希望可以实现：将checkbox组件添加到div.right
    }
  }

}
</script>
<style scoped>
.draggle {
  display: flex;
  padding: 10px;
}
.left {
  width: 300px;
  height: 300px;
  margin-right: 20px;
}
.right {
  width: 400px;
  min-height: 300px;
  padding: 10px 0;
  border: 1px solid #f20;
  overflow-y: scroll;
}
.right::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: #f20;
}
.right::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
  border-radius: 10px;
  background-color: #FFF;
} 
.right::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #f20;
} 
.right:hover {
  box-shadow: 0 0 6px #f20;
}
.widget_item {
  float: left;
  width: 92px;
  text-align: center;
  margin: 6px 4px;
  border: 1px dashed #999;
  padding: 5px 0;
  cursor: move;
  border-radius: 2px;
  -webkit-transition: background ease-in-out 0.15s;
  -moz-transition: background ease-in-out 0.15s;
  transition: background ease-in-out 0.15s;
  background-color: #f5f5f5;
  position: relative;
  z-index: 100;
}
.right_right {
  width: 300px;
  height: 300px;
  border: 1px solid #f20;
  margin-left: 20px;
}
</style>
<template>
  <div class="twocloumn" draggable="true">
    <div class="item" @drop="drop1">
      <component :is="tag1"></component>
    </div>
    <div class="item" @drop="drop2">
      <component :is="tag2"></component>
    </div>
  </div>
</template>
<script>
import checkbox from '../checkbox/checkbox';
import inputtext from '../text/inputtext';
export default {
  name: 'twocloumn',
  data() {
    return {
      tag1: '',
      tag2: ''
    }
  },
  components: {
    checkbox,
    inputtext,
  },
  methods: {
    drop1(e) {
      e.preventDefault();
      let tag = e.dataTransfer.getData('tag')
      console.log(tag)
      this.tag1 = tag;
    },
    drop2(e) {
      e.preventDefault();
      let tag = e.dataTransfer.getData('tag')
      console.log(tag)
      this.tag2 = tag;
    }
  }

}
</script>
<style scoped>
.twocloumn {
  height: 50px;
  display: flex;
}
.item {
  flex: 1;
  box-sizing: border-box;
  height: 100%;
  border: 1px solid #7FCDFD;
  border-top: none;
}
.item:nth-of-type(2) {
  border-left: none;
}
</style>
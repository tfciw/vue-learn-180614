<template>
  <div class="inputtext" draggable="true">
    <input type="text" name="" class="inputtext" placeholder="请输入文本">
  </div>
</template>
<script>
export default {
  name: 'inputtext',
  data() {
    return {

    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('');
    }
  }

}
</script>
<style scoped>
.inputtext {
  display: block;
  width: 70%;
  max-height: 50px;
  height: 80%;
  margin-top: 5px;
  padding-left: 20px;
}
</style>
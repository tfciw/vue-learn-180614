<template>
  <div class="checkbox" draggable="true">
    <input type="checkbox" name="" id="checkbox">
    <label for="checkbox">篮球</label>
  </div>
</template>
<script>
export default {
  name: 'checkbox',
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
.checkbox {
  display: inline-block;
  width: 70%;
  max-height: 50px;
  margin-left: 20px;
  height: 80%;
  margin-top: 5px;
  background: lightblue;
}
</style>
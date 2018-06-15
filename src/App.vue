<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,div,a,p {
	margin: 0;padding: 0;
}
#app {
	overflow: hidden;
}
div::-webkit-scrollbar {
	-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 10px;
    background: #EDEDED;
}
</style>

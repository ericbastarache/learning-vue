<template>
  <div class="bordered">
    <h1>{{aboutText}}</h1>
    <a href="#/">Back To Home</a>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      aboutText: 'This is About',
    };
  },
};
</script>
<style scoped>
h1 {
  color: #ff0000;
}
div.bordered {
  border: 1px solid #0000ff;
}
a {
  color: #42b983;
}
</style>

<template>
  <div id="list-holder">
      <list></list>
  </div>
</template>

<script>
  import List from './List';

  export default {
    components: {
      list: List,
    },
    data() {
      return {
        listItems: [],
      };
    },
  };
</script>
<template>
  <div>
      <div v-for="item in items" v-bind:key="item.id">
          <h1>{{item.id}}</h1>
          <p>{{item.name}}</p>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [],
      };
    },
    created() {
      this.items = [
          { id: 1, name: 'Bob' },
          { id: 2, name: 'Joe' },
          { id: 3, name: 'Mack' },
          { id: 4, name: 'John' },
          { id: 5, name: 'Alyssa' },
      ];
    },
  };
</script>

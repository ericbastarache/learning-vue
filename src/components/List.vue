<template>
<div>
  <ul>
    <item v-for="item in items" v-bind:key="item.id"></item>
  </ul>
  <button @click="addItem()">Add New Item</button>
</div>
</template>
<script>
  import Item from './Item';

  export default {
    components: {
      item: Item,
    },
    data() {
      return {
        items: [],
      };
    },
    methods: {
      getItems() {
        return this.items;
      },
      addItem() {
        this.items.push({ id: this.items.length, name: 'Test' });
        const obj = Object.assign({}, this.items);
        this.$set(this.items, obj);
        // return this.items.push({ id: this.items.length, name: 'Test' });
      },
    },
  };
</script>
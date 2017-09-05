<template>
<div>
  <ul>
    <item v-for="item in items" v-bind:key="item.id"></item>
  </ul>
  <input v-model="itemText" @keyup.enter="addItem()" />
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
        itemText: '',
      };
    },
    methods: {
      getItems() {
        return this.items;
      },
      addItem() {
        this.items.push({ id: this.items.length, name: this.itemText });
        const obj = Object.assign({}, this.items);
        this.$set(this.items, obj);
        // return this.items.push({ id: this.items.length, name: 'Test' });
      },
    },
  };
</script>
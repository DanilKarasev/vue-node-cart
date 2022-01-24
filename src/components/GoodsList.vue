<template>
  <div class="goods-list">
    <GoodCart
      v-for="good of list"
      v-bind:key="good.id_product"
      v-bind:good="good"
    ></GoodCart>
  </div>
</template>

<script>
import GoodCart from './GoodCart.vue'

export default {
  components: {
    GoodCart
  },
  computed: {
    list() {
      return this.$store.getters.goods
    }
  },
}
</script>
<style lang="scss" scoped>
.goods-list{
  column-gap: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-template-rows: 1fr;
  padding: 40px 80px;
  justify-content: space-between;
}


</style>

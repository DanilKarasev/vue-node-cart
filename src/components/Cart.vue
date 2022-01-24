<template>
  <div class="cart-block">
    <div class="goods-list">
      <p v-if="!cart.length">Cart is empty</p>
      <CartItem  v-for="good of cart" v-bind:key="good.id_product" v-bind:good="good" ></CartItem>
    </div>
  </div>
</template>

<script>
import CartItem from '../components/CartItem.vue'

export default {
  components: {
    CartItem
  },
  computed: {
    cart() {
      return this.$store.getters.cart
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-block{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.62);
  border-radius: 5px;
  box-sizing: border-box;
  right: 7%;
  top: 11%;
  position: absolute;
  background-color: white;
  padding: 20px;
  color: black;
  width: 300px;
}
.cart-block p{
  text-align: center;
  color: #888888;
}
.cart-block:before{
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: -10px;
  right: 35px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
}
</style>

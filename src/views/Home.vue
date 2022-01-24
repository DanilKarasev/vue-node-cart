<template>
  <div class="page">
    <header>
      <div class="logo">E-shop</div>
      <div class="header-right">
        <Search></Search>
        <button class="cart-button" type="button" v-on:click="onToggleCart">Корзина</button>
      </div>
    </header>
    <main>
      <GoodsList></GoodsList>
    </main>
    <Cart
      v-bind:isVisibleCart="isVisibleCart"
      v-on:close="onToggleCart"
      v-if="isVisibleCart"
    ></Cart>
  </div>
</template>

<script>
import Search from '../components/Search.vue';
import GoodsList from '../components/GoodsList.vue';
import Cart from '../components/Cart.vue';


export default {
  components: {
    Search,
    GoodsList,
    Cart,
  },
  data() {
    return {
      isVisibleCart: false,
    };
  },
  methods: {
    onToggleCart() {
      this.isVisibleCart = !this.isVisibleCart
    }
  },
  mounted() {
    this.$store.dispatch('loadGoods'),
    this.$store.dispatch('loadCart')
  }
}
</script>

<style lang="scss">
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}
body{
  margin: 0;
  font-family: 'SF Pro Display', sans-serif;
}
header{
  display: flex;
  background-color: #2f2a2d;
  justify-content: space-between;
  color: #fafafa;
  padding: 30px 80px;
}
main {
  display: block;
}
button:focus{
  outline: none;
}
.logo{
  text-transform: uppercase;
  font-weight: bold;
  align-self: center;
}
.header-right{
  position: relative;
}
.cart-button{
  background-color: #fafafa;
  padding: 10px 20px;
  border: 1px solid transparent;
  color: #2f2a2d;
  border-radius: 5px;
  transition: all ease-in-out .3s;
  cursor: pointer;
  align-self: center;
}
.cart-button:hover{
  background-color: transparent;
  border-color: #fafafa;
  color: #fafafa;
}


</style>

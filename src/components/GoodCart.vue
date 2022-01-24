<template>
  <div class="good-card">
    <img src="https://via.placeholder.com/200x150?text=Some+good" alt="Some img">
    <div class="desc">
      <h3>{{ good.product_name }}</h3>
      <p>$ {{ good.price }}</p>
      <button v-on:click="onClick" class="buy-btn">Купить</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'GoodCart',
  props: {
    good: Object
  },
  methods: {
    onClick() {
      this.$store.dispatch('addToCart', this.good)
    }
  }
}
</script>

<style scoped lang="scss">
.good-card{
  display: flex;
  flex-direction: column;
  width: 200px;
  border-radius: 5px;
  overflow: hidden;
  margin: 20px 0;
}
.desc {
  border: 1px solid #c0c0c040;
  padding: 15px
}
.buy-btn{
  margin-top: 5px;
  background-color: #2f2a2d;
  padding: 5px 15px;
  border: 1px solid transparent;
  color: #fafafa;
  border-radius: 5px;
  transition: all ease-in-out .3s;
  cursor: pointer;
}
.buy-btn:hover{
  background-color: #fafafa;
  color: #2f2a2d;
  border: 1px solid #2f2a2d;
}

</style>

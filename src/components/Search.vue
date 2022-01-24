<template>
  <form class="search" v-on:submit="onSubmit" action="#">
    <input type="text" v-model="searchString" class="goods-search" />
    <button type="submit" class="btn-search"><img src="../images/search.svg" alt="search"></button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchString: ''
    }
  },
  methods: {
    onSubmit(){
      this.$store.dispatch('search', this.searchString)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-search {
  background-color: transparent;
  border: none;
  color: #fafafa;
  font-size: 1.2em;
  position: absolute;
  bottom: 0;
  right: 0;
  transition: all ease .3s;
  cursor: pointer;
}
.btn-search:hover{
  filter: brightness(1000%);
}
.search{
  position: relative;
  margin-right: 50px;
  display: inline-block;
}
.goods-search:focus{
  outline: none;
}
.goods-search {
  box-sizing: border-box;
  width: 200px;
  color: #fafafa;
  padding: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #fafafa;
}
</style>

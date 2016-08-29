<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div class="">
    <Pagination></Pagination>
  </div>
</template>

<script>
import Pagination from '../components/pagination.vue'
export default {
  data () {
    return {
      msg: '分页'
    }
  },
  components: {
    Pagination
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}
</style>

<template>
    <div class="u-pagination f-cb" onselectstart="return false;" unselectable="on">
        <div class="goPage">
            跳转至第
            <div class="u-input">
                <input type="text" placeholder="页码" class="form-control" max="1"></div>
            页
            <a class="u-btn small info f-vam" href="javascript:;">确定</a>
        </div>

        <div class="pagination f-fr">
            <a class="icon item" href="javascript:;">&lt;</a>
            <!--ms-if-->
            <!--ms-if-->
            <!--ms-if-->
            <a class="item active" href="javascript:;">1</a>
            <!--ms-if-->
            <!--ms-if-->
            <!--ms-if-->
            <a class="icon item" href="javascript:;">&gt;</a>
        </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>

<template>
  <div class="i-date f-vam f-ib">
    <input type="text" :mindate="mindate" :maxdate="maxdate" name="datePicker" value="" class="u-input f-ib datePicker"  onClick="var _min=this.attributes.mindate.value,_max=this.attributes.maxdate.value;console.log(_min, _max);WdatePicker({minDate:_min,maxDate:_max})">
    <b></b>
  </div>

</template>

<script>
// require('../../plugin/Wdate/calendar')

export default {
  data (){
    return {
    }
  },
  props: {
    mindate: {
      type: String,
      default: '1900-01-01'
    },
    maxdate: {
      type: String,
      default: '2099-12-31'
    }
  }
}
</script>

<template>
<button type="button" class="btn btn-primary">Primary</button>

<div>
    {{info}}
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            info:null
        }
    },
mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
      console.log(this.info)
  }
};
 
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

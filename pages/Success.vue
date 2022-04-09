<template>
  <div class="container">
    <div class="py-5 text-center">
      <h2>Success</h2>
      <p class="lead">Your purchase has been completed!</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "../plugins/axios";
export default Vue.extend({
  async mounted() {
    const { data } = await axios.post("/orders/confirm", {
      session_id: this.$route.query.session_id,
    });
      // console.log(source)
    // await console.log(data);
     console.log(this.$route.query);
  },
});
console.log('hi');
</script>

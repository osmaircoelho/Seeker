<template>
  <div id="app">
    <b-container class="mt-5">

      <Seeker
        url_query_code="http://www.mocky.io/v2/5dcd53272e00003e86729dcb"
        url_query_item="http://www.mocky.io/v2/5dcd78a22e0000e17b729f39"
        url_query_table="http://www.mocky.io/v2/5dcd78a22e0000e17b729f39"
      ></Seeker>

    </b-container>
  </div>
</template>

<script>
import Seeker from './components/Seeker'

export default {
  name: 'app',
  components: {
    Seeker
  }
}
</script>

<style lang="scss"></style>

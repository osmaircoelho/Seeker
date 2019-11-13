<template>
  <div id="app">
    <b-container class="mt-5">
      <Seeker
        url_query_code="http://www.mocky.io/v2/5dcc5ad554000071ba9c22f0"
        url_query_item="http://www.mocky.io/v2/5dcc6c6354000045ba9c2344"
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

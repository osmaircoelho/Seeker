<template>
  <div id="seeker" class="col-auto form-inline">
    <input
      ref="input_code"
      type="text"
      class="form-control m-1"
      aria-label=""
      style="max-width:150px"
      @keyup.enter="findCode"
      :v-model="codeSearch"
      placeholder="Insert a code"
    />
    <v-autocomplete
      input-class="form-control m-1"
      placeholder="Insert an item"
      :items="itens"
      :get-label="getLabel"
      :component-item="template"
      @update-items="updateItems"
       :min-len='0'
    >
    </v-autocomplete>

    <button ref="button_search" class="btn btn-primary m-1" type="button">
      <i class="fas fa-search"></i>
    </button>

    <button ref="button_eraser" class="btn btn-danger" type="button">
      <i class="fas fa-eraser"></i>
    </button>

    <hr>

  </div>
</template>

<script>

import tpl from './Tplitem.vue'

export default {
  name: 'seeker',
  data: () => {
    return {
      codeSearch: '',
      itens: [],
      itemSearch: 'qwdqwd',
      template: tpl
    }
  },
  props: ['url_query_code', 'url_query_item'],
  methods: {
    findItem: function () {
      window.axios
        .get(`${this.url_query_item}?q=${this.itemSearch}`)
        .then(res => {
          this.itens = res.data
        })
    },
    getLabel (item) {
      return item.name
    },
    updateItems (text) {
      window.axios.get(`${this.url_query_item}?q=${text}`).then(res => {
        this.itens = res.data
      })
    }
  }
}
</script>

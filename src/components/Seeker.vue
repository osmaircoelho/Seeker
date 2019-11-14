<template>
  <div id="seeker" class="col-auto form-inline">
    <input
      type="text"
      class="form-control m-1"
      aria-label=""
      style="max-width:150px"
      @keyup.enter="findCode"
      placeholder="Insert a code"
      v-model="codeSearch"
    />
    <v-autocomplete
      ref="v-autocomplete"
      input-class="form-control m-1"
      placeholder="Insert an item"
      :items="itens"
      :get-label="getLabel"
      :component-item="template"
      @update-items="updateItems"
      :min-len="0"
      :auto-select-one-item="false"
      @input="itemChanged"
      v-model="itemSearch"
    >
    </v-autocomplete>

    <button ref="button_search" class="btn btn-primary m-1" type="button" @click="openAdvencedSearch" >
      <i class="fas fa-search"></i>
    </button>

    <button ref="button_eraser" @click="eraser" class="btn btn-danger" type="button">
      <i class="fas fa-eraser"></i>
    </button>

    <input type="hidden" :data-item="itemSearch"  >

    <hr />

  </div>
</template>

<script>
import tpl from './TemplateItem.vue'

export default {
  name: 'seeker',
  data: () => {
    return {
      codeSearch: '',
      itens: [],
      itemSearch: '',
      template: tpl,
      current_selected_item: ''
    }
  },
  props: ['url_query_code', 'url_query_item'],
  methods: {
    eraser: function () {
      this.itemSearch = null
    },
    findCode: function () {
      window.axios
        .get(`${this.url_query_code}?q=${this.codeSearch}`)
        .then(res => {
          this.itemSearch = res.data ? res.data : null
        })
        .catch(function (error) {
          console.error(error)
        })
    },
    findItem: function () {
      window.axios
        .get(`${this.url_query_item}?q=${this.itemSearch}`)
        .then(res => {
          this.itens = res.data
        })
        .catch(function (error) {
          console.error(error)
        })
    },
    getLabel: function (item) {
      return item ? item.name : ''
    },
    updateItems: function (text) {
      window.axios.get(`${this.url_query_item}?q=${text}`).then(res => {
        this.itens = res.data
      })
    },
    itemChanged: function (item) {
      this.codeSearch = item ? item.id : null
    },
    openAdvencedSearch: function () {
      alert('teste')
    }
  }
}
</script>

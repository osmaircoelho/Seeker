<template>
  <b-row id="seeker" class="col-auto form-inline">
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

    <b-button
      v-b-modal.modal-center
      ref="button_search"
      variant="primary"
      class="m-1"
      type="button"
    >
      <i class="fas fa-search"></i>
    </b-button>

    <button
      ref="button_eraser"
      @click="eraser"
      class="btn btn-danger"
      type="button"
    >
      <i class="fas fa-eraser"></i>
    </button>

    <b-modal id="modal-center" hide-footer centered size="xl" title="">
      <template v-slot:modal-title>
        <p><i class="fas fa-search"></i> Advenced search</p>
      </template>

      <b-conteiner>
        <b-row>
          <b-col>
            <div>
              <b-form inline>
                <b-input
                  id="inline-form-input-name"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  placeholder="insert a code"
                ></b-input>

                <b-input
                  id="inline-form-input-name"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  placeholder="Insert an item"
                ></b-input>
              </b-form>
            </div>
          </b-col>
        </b-row>
        <br />
        <b-row>
          <b-col>
            <b-table bordered hover responsive :items="table_items"></b-table>
          </b-col>
        </b-row>
      </b-conteiner>
    </b-modal>

    <input type="hidden" :data-item="itemSearch" />

    <hr />
  </b-row>
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
      current_selected_item: '',
      table_items: [
        { 'id': 40, 'name': 'Dickerson', 'description': 'Macdonald is a good guy' },
        { 'id': 21, 'name': 'Larsen', 'description': 'Shaw is boring' },
        { 'id': 89, 'name': 'Geneva', 'description': 'Wilson vai' },
        { 'id': 38, 'name': 'Jami', 'description': 'Carneyro' }
      ]
    }
  },
  props: {
    url_query_code: { required: true },
    url_query_item: { required: true },
    url_query_table: { required: true }
  },
  methods: {
    eraser: function () {
      this.itemSearch = null
    },
    findCode: function () {
      window.axios
        .get(`${this.url_query_code}?q=${this.codeSearch}`)
        .then(res => {
          console.log(res.data)
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
    }
  }
}
</script>

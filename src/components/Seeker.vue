<template>
  <div id="seeker" class="col-auto form-inline">

    <input
      ref="input_code"
      type="text"
      class="form-control m-1"
      aria-label=""
      style="max-width:150px"
      @keyup.enter="findCode"
      :v-model="code"
      placeholder="Insert a code"
    />
  <vue-bootstrap-typeahead
      :data="itens"
      :v-model="itemSearch"
      placeholder="Insert an item"
    />

    <button ref="button_search" class="btn btn-primary m-1" type="button">
      <i class="fas fa-search"></i>
    </button>

    <button ref="button_eraser" class="btn btn-danger" type="button">
      <i class="fas fa-eraser"></i>
    </button>

  </div>
</template>

<script>
export default {
  data: () => {
    return {
      code: '',
      itens: [
        'item',
        'item2',
        'item3',
        'item4',
        'item5'
      ],
      itemSearch: ''
    }
  },
  methods: {
    findCode: () => {
      this.code_is_loading = true
      alert('dqwdqwdqwdqwd')
    }
  }
}
</script>

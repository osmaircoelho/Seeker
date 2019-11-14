<template>
    <div class="rounded border p-2">
        <b class="text-left">#{{item.id}}</b>
        <br>
        <b>{{ item.name }}</b>
        <p> {{item.description}}</p>
    </div>
</template>

<script>
export default {
  props: {
    item: { required: true }
  }
}
</script>

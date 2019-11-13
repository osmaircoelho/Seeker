<template>
    <div>
        <b>#{{item.id}}</b>
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

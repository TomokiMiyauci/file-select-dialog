<template>
  <div class="wrapper">
    <button class="btn" @click="onClick">Plain Button</button>
  </div>
  <div class="wrapper">
    <img style="max-height: 300px" :src="dataUrl" />
  </div>
</template>

<script setup lang="ts">
import { fileDialog } from 'file-select-dialog'
import { ref } from 'vue'

const dataUrl = ref()

const onClick = async () => {
  const file = await fileDialog({ strict: true })

  const fileReader = new FileReader()
  fileReader.onload = ({ target }) => {
    dataUrl.value = target.result
  }

  fileReader.readAsDataURL(file)
}
</script>

<style scoped>
.wrapper {
  text-align: center;
}
.btn {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border-width: 0;
  border-style: solid;
  outline: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  background-color: rgba(196, 181, 253, 1);
  transition: all 0.2s;
  background-image: linear-gradient(
    to right,
    rgb(196, 161, 253),
    rgb(182, 65, 246)
  );
}

.btn:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>

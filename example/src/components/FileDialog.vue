<template>
  <div
    class="relative z-10 rounded-r-xl sm:rounded-xl shadow-xl mx-auto lg:mx-0 xl:mx-auto"
    style="transform-origin: 50% 50% 0"
  >
    <div
      class="bg-white rounded-r-xl sm:rounded-xl overflow-hidden text-center p-8"
      style="transform-origin: 50% 50% 0"
    >
      <div
        class="text-left from-gray-100 bg-gradient-to-r to-gray-300 rounded-xl shadow hover:shadow-md transition-shadow duration-200"
      >
        <h3 class="mb-2 p-3">
          <span class="border-b-4 border-purple-300 text-xl">Parameter</span>
        </h3>

        <form-parameters />
      </div>
      <button-file-dialog class="mt-6" @click="onClick" />
    </div>
  </div>

  <div class="mt-4">
    <img
      v-for="(s, index) in src"
      :key="`${index}-${s}`"
      width="300"
      alt="from fileDialog"
      class="rounded"
      :src="s"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, inject, ref } from 'vue'
  import ButtonFileDialog from '/@/components/ButtonFileDialog.vue'
  import { fileDialog } from 'file-select-dialog'
  import FormParameters from '/@/components/FormParameters.vue'
  import counter, { CounterStore } from '/@/components/useForm'
  import { getDataUrl } from '../utils/file'

  export default defineComponent({
    components: {
      ButtonFileDialog,
      FormParameters,
    },

    setup() {
      const { accept, multiple } = inject(counter) as CounterStore

      const src = ref<string[]>([])
      const onClick = async () => {
        const file = await fileDialog({
          multiple: multiple.value,
          accept: accept.value,
        })

        console.log(file instanceof FileList)

        if (file instanceof FileList) {
          src.value = await Promise.all(
            Array.from(file).map((f) => getDataUrl(f))
          )
        } else {
          src.value = [await getDataUrl(file)]
        }
      }

      return { onClick, src }
    },
  })
</script>

<template>
  <div class="grid">
    <div
      class="col-start-1 col-end-2 sm:col-start-2 sm:col-end-3 lg:col-start-1 lg:col-span-full row-start-1 row-span-full xl:col-start-1 xl:col-end-5 xl:row-start-2 xl:row-end-5 lg:py-10 xl:py-16 flex -ml-8 pr-4 sm:ml-0 sm:pr-0"
    >
      <div
        class="bg-gradient-to-br to-indigo-200 shadow-lg from-green-200 transform rotate-3 w-full flex-none rounded-3xl"
      ></div>
    </div>
    <div
      class="relative col-start-1 col-end-2 sm:col-start-2 sm:col-end-3 lg:col-start-1 lg:col-span-full xl:col-start-2 xl:col-end-3 row-start-2 row-end-3 xl:row-start-3 xl:row-end-4 self-center pr-8 sm:px-6 md:px-8 pb-6 md:pb-8 lg:px-0 lg:pb-0 -mt-6 sm:-mt-10 md:-mt-16 lg:-mt-32 xl:mt-0"
    >
      <div class="max-w-xl xl:max-w-none flex items-center justify-center">
        <div class="flex-none">
          <div class="xl:-mr-8">
            <file-dialog />
          </div>
        </div>
      </div>
    </div>
    <editor-preview />
  </div>
</template>

<script lang="ts">
  import { defineComponent, provide } from 'vue'
  import EditorPreview from '/@/components/EditorPreview.vue'
  import ButtonFileDialog from '/@/components/ButtonFileDialog.vue'
  import FileDialog from '/@/components/FileDialog.vue'
  import counter, { useForm } from '/@/components/useForm'

  export default defineComponent({
    components: {
      EditorPreview,
      FileDialog,
    },

    setup() {
      return provide(counter, useForm())
    },
  })
</script>

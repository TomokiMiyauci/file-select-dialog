<template>
  <table>
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
        <th>Type</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          <label for="m">multiple</label>
        </td>
        <td>
          <input id="m" v-model="multiple" type="checkbox" />
        </td>
        <td>boolean</td>
      </tr>

      <tr>
        <td>
          <label for="a">accept</label>
        </td>
        <td>
          <input
            id="a"
            v-model.trim="accept"
            type="text"
            spellcheck="false"
            class="outline-none shadow rounded p-2 hover:bg-gray-100 focus:bg-purple-200 focus:ring-inset focus:shadow-md transition duration-200"
            placeholder="Enter accept"
          />
        </td>
        <td>string | string[]</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
  import { defineComponent, inject } from 'vue'
  import counter from '/@/components/useForm'
  export default defineComponent({
    setup() {
      return inject(counter)
    },
  })
</script>

<style scoped lang="scss">
  table {
    > thead > tr {
      @apply bg-red-200 bg-gradient-to-r from-green-300 to-purple-300;

      > th {
        @apply py-2 px-3 font-normal;
      }
    }

    > tbody > tr {
      @apply transition duration-200;

      &:hover {
        @apply bg-gradient-to-r from-green-200 to-purple-200;
      }

      > td {
        @apply py-2 px-3;
      }
    }
  }
</style>

<template>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NewEraTable from './components/NewEraTable.vue';

@Options({
  components: {
    HelloWorld: NewEraTable,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>

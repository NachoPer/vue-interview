<script setup lang="ts">
import type { Pieza } from 'src/api/data';
import { toRaw } from 'vue';

const props = defineProps<{piezas: Pieza[]}>()
const piezas = toRaw(props.piezas)
console.log({piezas})
</script>
<template>
  <tr>
    <td>puerta</td>
    <td>10</td>
    <td>20</td>
    <td>5</td>
    <td>Negro MDF</td>
  </tr>
</template>
<style scoped>
td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
  background-color: #f5f5f5;
}

tr:hover td {
  background-color: #020202;
  color: #f2f2f2;
}
.cajon td {
  background-color: #ff5500;
}
</style>

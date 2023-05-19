<script setup lang="ts">
import type { Pieza } from 'src/api/data';
import { toRaw } from 'vue';
const emit = defineEmits(['response'])
const props = defineProps<{piezas: Pieza[]}>()
const piezas = toRaw(props.piezas)
console.log({piezas})

interface m2Props {
  x:number;
  y:number;
  z:number;
}

const m2 = (x:number,y:number,z:number) => {
  const total = x * y * z
  console.log(total)
  emit('response', total)
  return total
}


</script>
<template>
  <tr v-for="pieza in piezas" @click="m2(pieza.ancho,pieza.alto,pieza.largo)" :class="{cajon: pieza.tipo === 'cajón' }" :key="pieza.id">
    <td >
      {{ pieza.tipo }}
    </td>
    <td>{{ pieza.ancho }}</td>
    <td>{{ pieza.alto }}</td>
    <td>{{ pieza.largo }}</td>
    <td>{{ pieza.material }}</td>
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

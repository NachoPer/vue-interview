<script setup lang="ts">
import { onMounted, reactive,ref, type Ref, watch } from 'vue';

import FilasPiezas from './components/FilasPiezas.vue'
import { getPiezas, type Pieza, TIPO_MATERIALES } from './api/data'

const state: {piezas: Pieza[] }= reactive({piezas: []})
const loading:Ref<boolean>= ref(true)
const totalm2: Ref<number> = ref(0) 
const selected:Ref<string> = ref('')

onMounted(async () => {
  const piezasData = await getPiezas()
  const filtered = filterType(piezasData)
  loading.value = false
  state.piezas = filtered
})

const filterType =  (piezas:Pieza[]) => {
  const filtered = piezas.filter((el) => {
    return el.tipo === 'cajón' || el.tipo === 'puerta'
  })
  return filtered;
}

watch(selected, (newValue:string) => {
  state.piezas.sort((a) => {
    return a.material === newValue ? -1 : 1
  })
})
</script>

<template>
  <header>
    <h1 class="white">Piezas ML Plak</h1>
    <select v-model="selected">
      <option :value="TIPO_MATERIALES.BLANCO_MDF">{{ TIPO_MATERIALES.BLANCO_MDF }} </option>
      <option :value="TIPO_MATERIALES.NEGRO_MDF">{{ TIPO_MATERIALES.NEGRO_MDF }} </option>
    </select>
  </header>
  <main>
    <h2>{{ totalm2 }}</h2>
    <p v-if="loading">loading...</p>
    <table v-else>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Ancho</th>
          <th>Alto</th>
          <th>Largo</th>
          <th>Material</th>
        </tr>
      </thead>
    <tbody v-if="state.piezas.length">
      <FilasPiezas :piezas="state.piezas" @response="(total)=> totalm2 = total "></FilasPiezas>
    </tbody>
  </table>
  </main>
</template>

<style scoped>
.white {
  color: white;
}
table {
  width: 100%;
  border-collapse: collapse;
  color: #020202;
}
th {
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #e0e0e0;
  text-align: left;
}
</style>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';

import FilasPiezas from './components/FilasPiezas.vue'
import { getPiezas, type Pieza, TIPO_MATERIALES } from './api/data'

const state: {piezas: Pieza[] }= reactive({piezas: []})

onMounted(async () => {
  const piezasData = await getPiezas()
  state.piezas = piezasData
})
</script>

<template>
  <header>
    <h1 class="white">Piezas ML Plak</h1>
    <!-- <select >
      <option :value="TIPO_MATERIALES.BLANCO_MDF">{{ TIPO_MATERIALES.BLANCO_MDF }} </option>
      <option :value="TIPO_MATERIALES.NEGRO_MDF">{{ TIPO_MATERIALES.NEGRO_MDF }} </option>
    </select> -->
  </header>
  <main>
    <table>
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
      <FilasPiezas :piezas="state.piezas"></FilasPiezas>
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

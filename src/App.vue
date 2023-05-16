<script setup lang="ts">
import FilasPiezas from './components/FilasPiezas.vue'
import { getPiezas } from './api/data'
</script>

<template>
  <header>
    <h1 class="white">Piezas ML Plak</h1>
  </header>
  <main>
    <thead>
      <tr>
        <th>ID</th>
        <th>Tipo</th>
        <th>Ancho</th>
        <th>Alto</th>
        <th>Largo</th>
        <th>Material</th>
      </tr>
    </thead>
    <tbody>
      <FilasPiezas></FilasPiezas>
    </tbody>
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

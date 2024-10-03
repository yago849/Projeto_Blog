<script setup>
import cabecalhoprops from './cabecalhoprops.vue';
import botao from './Botao.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <header>
      <h1>Le Mans</h1>
      <nav>
        <RouterLink to="/" class="nav-button">Home</RouterLink>
        <RouterLink to="/postagens" class="nav-button">Postagens</RouterLink>
        <RouterLink to="/login" class="nav-button">Login</RouterLink>
      </nav>
    </header>
  </div>
</template>

<style scoped>
div {
  margin: 0;
  font-family: Arial, sans-serif;
}

header {
  background-color: #e4bb28;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  gap: 10px; /* Espaçamento entre os botões */
}

.nav-button {
  background-color: white;
  color: #e4bb28;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none; 
  display: inline-block; 
}

.nav-button:hover {
  background-color: #e7e7e7; 
}
</style>

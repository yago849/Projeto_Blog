<script setup>
import Cabecalho from './components/cabecalho.vue'
import Postagem from './components/componenteBlog.vue'
import Login from './components/TelaLogin.vue'
import Home from './components/Home.vue'


</script>

<template>
  <div class="container">
    <div class="cabecalho">
      <Cabecalho />
    </div>
    
    <router-view/>

    <Postagem  />
  </div>

</template>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
</style>

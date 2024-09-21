
<script setup>
import Postagem from './components/Postagem.vue';
import Postagem2 from './components/Postagem2.vue';
import Postagem3 from './components/Postagem3.vue';
import logotipo from './assets/logo.png';
import Cabecalho from './components/cabecalho.vue';

</script>

<template>
  <div class="container">
    <Cabecalho />
    <BarraMenu />
    <Postagem  />
    <Postagem2 />
    <Postagem3 />
    
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

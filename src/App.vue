<template>
  <div class="container">
    <Postagem />
    <Postagem2 />
    <Postagem3 />
  </div>
</template>

<script>
import Postagem from './components/Postagem.vue';
import Postagem2 from './components/Postagem2.vue';
import Postagem3 from './components/Postagem3.vue';

export default {
  components: {
    Postagem,
    Postagem2,
    Postagem3
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
</style>

<template>
  <div class="post">

    <componenteProps
      conteudo="Em 2024, a Ferrari consolidou sua hegemonia em Le Mans com uma vitória consecutiva,
         provando que o sucesso do ano anterior não foi apenas sorte.
          A equipe demonstrou uma incrível consistência e habilidade técnica,
           garantindo sua posição como uma das maiores na história do automobilismo."
      autor="Yago"
    />
  </div>
</template>

<script>
import componenteProps from './componenteProps.vue'

export default {
  name: 'Postagem',
  components: {
    componenteProps
  }
}
</script>

<style scoped>
.post {
  width: 80%;
  max-width: 600px;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
}

figure {
  margin: 0;
  position: relative;
}

.caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  z-index: 1;
}

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}
</style>
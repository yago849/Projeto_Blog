<template>
  <div class="post">

    <componenteProps
      conteudo="Em 2023, a Ferrari voltou ao topo do pódio em Le Mans após décadas de ausência.
         O retorno triunfante da Scuderia foi marcado por uma performance impecável do 499P,
          que levou a equipe italiana a uma vitória histórica na corrida de resistência mais prestigiada do mundo."
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
<script setup>
import componenteProps from './componenteProps.vue'
import imagempost2 from "../assets/2023.jpg"
</script>

<template>
<div id="area_postagem">
  <div class="post">

    <componenteProps

    conteudo="Em 2023, a Ferrari voltou ao topo do pódio em Le Mans após décadas de ausência.
         O retorno triunfante da Scuderia foi marcado por uma performance impecável do 499P,
          que levou a equipe italiana a uma vitória histórica na corrida de resistência mais prestigiada do mundo."
      autor="Yago"
      :imagem="imagempost2"/>

  </div>
</div>

</template>


<style>

</style>
<script setup>
import componenteProps from './componenteProps.vue'
import imagempost1 from "../assets/2022.jpg"
</script>

<template>
<div id="area_postagem">
  <div class="post">

    <componenteProps

      conteudo="Em 2022, a Toyota conquistou uma vitória impressionante nas 24 Horas de Le Mans, 
        demonstrando uma combinação de velocidade, resistência e estratégia impecável. 
        O GR010 Hybrid mostrou-se imbatível, dominando a corrida desde o início."
      autor="Yago"
      :imagem="imagempost1"/>
  </div>
</div>

</template>


<style>

</style>
<script setup>
import componenteProps from './componenteProps.vue'
import imagempost3 from "../assets/2024.jpg"
</script>

<template>
<div id="area_postagem">
  <div class="post">

    <componenteProps

    conteudo="Em 2024, a Ferrari consolidou sua hegemonia em Le Mans com uma vitória consecutiva,
         provando que o sucesso do ano anterior não foi apenas sorte.
          A equipe demonstrou uma incrível consistência e habilidade técnica,
           garantindo sua posição como uma das maiores na história do automobilismo."
      autor="Yago"
      :imagem="imagempost3"/>

  </div>
</div>

</template>


<style>

</style>
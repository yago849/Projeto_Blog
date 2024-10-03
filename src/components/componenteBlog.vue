<script setup>
import componenteProps from './componenteProps.vue'
import imagempost1 from "../assets/2022.jpg"
import imagempost2 from "../assets/2023.jpg"
import imagempost3 from "../assets/2024.jpg"
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
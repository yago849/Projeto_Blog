<script setup>
import cabecalhoprops from './cabecalhoprops.vue'
import barraMenu from './Barramenu.vue'
import botao from './Botao.vue'
</script>


<template>
<cabecalhoprops
  nome="Le Mans"
  link="/login"
/>
<p style="height: 20px;"></p>
<div class="menu">

  <botao link="https://www.google.com" nome="Home" class="button"></botao>
  <botao link="/" nome="Home" class="button"></botao>
  <botao link="/posts" nome="Postagens" class="button"></botao>
</div>
</template>



<style scoped>


.menu{
  text-align: center;
}

.button{
  margin-right: 40px;
}

/* Removed duplicate .cabecalho-col1 class */
p{
  width: 1000px;
}

h2{
  font-weight: bolder;
}

h1{
  font-size: 60px;
}

.autor{
  font-size: 0.8em;
}

.post{
  background-color: gainsboro;
  margin-top: 20px;
  padding: 20px;
}

.cabecalho-col1{
  display: inline-block;
}

.sla{
  text-align: right;
}

.login{
  font-size: 40px;
}


  
</style>
<script setup>
import cabecalhoprops from './cabecalhoprops.vue'
import barraMenu from './Barramenu.vue'
import botao from './Botao.vue'
</script>


<template>
<cabecalhoprops
  nome="Blog do Código"
  link=""
/>

<div class="menu">

  <botao link="https://www.google.com" texto="Home" class="button"/>
  <botao link="https://www.google.com" texto="Google" class="button"/>
  <botao link="https://www.google.com" texto="Postagens" class="button"/>
</div>
</template>



<style scoped>

.menu{
  text-align: center;
}
.button{
  margin-right: 40px;
}

.cabecalho-col1{
  height: 30px;
}
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
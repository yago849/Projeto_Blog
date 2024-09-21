<script setup>
import cabecalhoprops from './cabecalhoprops.vue'
import barraMenu from './Barramenu.vue'
import botao from './Botao.vue'
</script>


<template>
cabecalho">
ass="cabecalho-col1">
:src="logotipo" width=50px>

textoDoBotao="Login/Logout" link=""/>
textoDoBotao="Home" link=""/>
textoDoBotao="Postagens" link="./AreaPostagem.vue"/>
textoDoBotao="Inscreva-se" link=""/>

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
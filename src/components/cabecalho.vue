<script>
  import botao from './Botao.vue'
  export default {
    name: 'cabecalho',
    props: {
      logotipo: String,
      txtBotao: String,
      link: String
      },
      components: {
        botao
      }
    }

</script>

<template>
    <div id="cabecalho">
        <div class="cabecalho-col1"
          img :src="logotipo" width="50px">
        </div>
        <div>
          <botao :txtBotao="txtBotao" :link="link" />
        </div>
    </div>
</template>

<style>
  h1{
    font-size: 70px;
  }
</style>


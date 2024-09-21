<script >
import Botao from './Botao.vue';
export default {
  name: 'App',
  data() {
    return {};
  },

  props:{
    nome:String,
    link:String
  },


}
</script>

<template>

  <div id="cabecalho">
    <div class="cabecalho-col1">
    <h1> {{ nome }} </h1>
    </div> 

    <div class="sla">
      <div class="cabecalho-col1" id="cabecalho-login">
      <a :href="link" class="login">Login</a><p></p>
      </div>
    </div>

  </div>
</template>



<style scoped>

#cabecalho{
  display: flex;
  background-color:gainsboro;
  height: 100px;
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

.sla {
  float: right;
  margin-top: 25px;
  display: flex;
  justify-content: flex-end;
}

.login{
  font-size: 40px;
}


  
</style>

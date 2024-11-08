<script>
import Botao from './Botao.vue';
  export default {
    name: "Cabecalho",
    props: {
      logotipo: String,
      usuario: String,
    },
    components: {
      Botao
    },
    methods: {
      obterRotaAtual() {
        console.log(this.$route.path);
        return this.$route.path;
      }
    }
  }
</script>

<template>
    <header>
      <div id="cabecalho">
      <img class="logotipo" :src="logotipo">
      <nav class="cabecalho-col2" v-if="obterRotaAtual()!='/'">
        <Botao textoDoBotao="Login/Logout" link="/"/>
        <Botao textoDoBotao="Postagens" link="/areapostagem"/>
        <p v-if="usuario">Bem-vindo, {{usuario}}</p>
      </nav>
    </div>
    </header>
</template>

<style scoped>
    /* Estilo do cabeçalho */
    header {
        background-color: #1d1d1d; /* Fundo escuro, remetendo à pista de corrida */
        padding: 20px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7); /* Sombra para dar destaque */
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    /* Estilo da imagem (logotipo) */
    .logotipo {
        height: 80px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Sombra para destacar o logotipo */
    }

    /* Estilo da navegação */
    .cabecalho-col2 {
        display: flex;
        align-items: center;
        gap: 20px; /* Espaço entre os itens de navegação */
    }

    /* Estilo para os botões */
    .cabecalho-col2 a {
        color: #FFD700; /* Dourado para o tema Le Mans */
        font-size: 1.1em;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        padding: 10px;
        border-radius: 5px;
        transition: background-color 0.3s, transform 0.3s;
    }

    /* Efeito de hover nos botões */
    .cabecalho-col2 a:hover {
        background-color: #FFD700; /* Fundo dourado ao passar o mouse */
        color: #1d1d1d; /* Texto escuro no hover */
        transform: scale(1.05); /* Efeito de aumento no hover */
    }

    /* Estilo para o texto do usuário */
    .cabecalho-col2 p {
        font-size: 1em;
        font-weight: bold;
        color: #FFD700; /* Dourado para destacar o texto */
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Sombra para o texto */
    }
</style>

<script>
    import { RouterLink } from 'vue-router';
    export default {
        props: {
            link: String,
            textoDoBotao: String
        }
    }
</script>

<template>
    <div>
        <RouterLink :to="link" class="botao">{{textoDoBotao}}</RouterLink>
    </div>
</template>

<style scoped>
    /* Estilo do container do botão */
    div {
        padding: 20px;
        float: left;
    }

    /* Estilo do link do botão */
    .botao {
        display: inline-block;
        text-decoration: none;
        color: #1d1d1d; /* Cor do texto, simulando o asfalto */
        background-color: #FFD700; /* Dourado, lembrando os troféus e medalhas de corridas */
        padding: 10px 20px;
        font-size: 1.1em;
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Sombra suave */
        transition: all 0.3s ease;
        margin-right: 15px;
    }

    /* Efeito de hover nos botões */
    .botao:hover {
        background-color: #1d1d1d; /* Fundo escuro ao passar o mouse */
        color: #FFD700; /* Texto dourado ao passar o mouse */
        transform: scale(1.05); /* Leve aumento ao passar o mouse */
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6); /* Sombra mais intensa ao passar o mouse */
    }
</style>

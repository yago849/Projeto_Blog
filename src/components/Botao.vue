<script>
export default {
    props: {
        txtBotao: String,
        link: String
    }
}
</script>

<template>
    <div class="cabecalho-col1" id="cabecalho-login">
        <a href="link" class="login">{{ txtBotao }}</a>
    </div>

</template>

<style scoped>
.login {
    color: white;
    text-decoration: none;
    font-size: 1.5em;
    font-weight: bold;
    padding: 10px;
    margin: 10px;
    border: 2px solid white;
    border-radius: 10px;
    background-color: #1E90FF;
    transition: background-color 0.5s;
}
</style>
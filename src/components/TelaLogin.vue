<script>
    export default {
        name: "Login",
        data() {
            return {
                email: "",
                senha: ""
            }
        },
        methods: {
            // Método que emite um evento para o componente pai
            emitLogin() {
                // chama o método checkLogin do componente pai
                console.log("Email: " + this.email);
                this.$emit("login", this.email);
            },
        }
    }
</script>

<template>
    <div id="login">
        <h1>Login</h1>
        <form>
            <label for="email">E-mail:</label>
            <input v-model="email" placeholder="Enter your email" />
            <label for="senha">Senha:</label>
            <input v-model="senha" type="password" id="senha" name="senha">
            <button @click="emitLogin">Entrar</button>
        </form>
    </div>
</template>

<style scoped>
    /* Estilo do container de login */
    #login {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 350px; /* Largura menor para o quadro */
        padding: 20px;
        background-color: #1C1C1C; /* Fundo escuro */
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Sombra para destacar o quadro */
        color: #FFFFFF;
        font-family: Arial, sans-serif;
        text-align: center;
        margin: 0 auto;
    }

    /* Estilização do título */
    h1 {
        font-size: 2em;
        font-weight: 800;
        color: #FFD700; /* Dourado, para representar o troféu */
        margin-bottom: 15px;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    }

    /* Estilo dos labels */
    label {
        font-size: 1em;
        color: #FFFFFF;
        margin-bottom: 5px;
        display: block;
        text-align: left;
        width: 100%;
    }

    /* Estilo dos campos de input */
    input {
        width: 100%;
        padding: 12px;
        margin: 10px 0 20px 0; /* Espaço maior entre as caixas de texto */
        border: none;
        border-radius: 5px;
        background-color: #2A2A2A; /* Cor escura para os campos */
        color: #FFFFFF;
        font-size: 1em;
    }

    /* Estilo do botão */
    button {
        background-color: #0077B6; /* Azul brilhante para um toque esportivo */
        color: #FFFFFF;
        border: none;
        padding: 12px;
        border-radius: 5px;
        font-size: 1.1em;
        font-weight: bold;
        cursor: pointer;
        width: 100%;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #FFD700; /* Muda para dourado ao passar o mouse */
    }

    /* Animação ao clicar */
    button:active {
        transform: scale(0.98);
    }
</style>


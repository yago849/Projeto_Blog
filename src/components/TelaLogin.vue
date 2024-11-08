<script>
export default {
  name: 'TelaLogin',
  data() {
    return {
      email: '',
      senha: ''
    };
  },
  methods: {
    emitlogin() {
      console.log("Email ; "+ this.email);
      this.$emit("login", this.email);
    },
  }
}
</script>

<template>
  <div class="tela-login">
    <div class="login">
      <h1>Login - Le Mans</h1>
      <form>

       
        <label for="email">Email</label>
        <input v-model="email" placeholder="Digite o Email!!!" name="email">
        <label for="senha">Senha</label>
        <input v-model="senha" type="password" placeholder="Digite a Senha!!!" name="senha">
      

        <hr>
        <button @click="emitlogin">Entrar</button>

      </form>
    </div>
  </div>
</template>

<style scoped>
.tela-login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
  background-image: url('../assets/imgLemans.jpg');
  background-size: cover;
  background-position: center;
  font-family: 'Poppins', sans-serif;
}

.login {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

h1 {
  color: #004aad;
  font-weight: bold;
  margin-bottom: 20px;
}

.formulario {
  display: flex;
  flex-direction: column;
}

.caixa1, .caixa2 {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.epo {
  color: #666;
  font-size: 12px;
}

button {
  background-color: #004aad;
  color: white;
  padding: 10px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

button:hover {
  background-color: #003080;
}
</style>

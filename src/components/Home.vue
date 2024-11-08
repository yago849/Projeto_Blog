<script>

</script>

<template>
  <div class="home-container">
    <div class="overlay">
      <h1 class="welcome-msg">Bem Vindo<br> ao Blog de Le Mans</h1>
      <hr class="divider">
      <h2 class="login-msg">Faça seu login <br> ou cadastre-se</h2>
    </div>
  </div>
</template>

<style scoped>
.home-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Ocupa toda a altura da tela */
    background-image: ('./assets/logo.png'); /* Imagem de fundo representando Le Mans */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}

.overlay {
    
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

.welcome-msg {
    color: #fdd835; /* Amarelo Le Mans */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #003c71; /* Azul Le Mans */
    font-size: 70px;
}

.login-msg {
    color: #003c71;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #003c71; /* Azul Le Mans */
    font-size: 50px;
}

.divider {
    margin: 20px auto;
    width: 50%;
    border: 1px solid #fdd835; /* Amarelo Le Mans */
}

.action-button {
    background-color: #003c71; /* Azul Le Mans */
    color: #ffffff;
    border: none;
    padding: 15px 30px;
    font-size: 20px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.action-button:hover {
    background-color: #fdd835; /* Amarelo Le Mans ao passar o mouse */
    color: #003c71; /* Azul Le Mans */
}
</style>

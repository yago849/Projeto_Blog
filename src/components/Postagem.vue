<template>
    <div class="post">
      <figure>
        <figcaption class="caption">2022</figcaption>
        <img alt="toyota" src="./assets/2022.jpg" />
      </figure>
      <p>Em 2022, a Toyota conquistou uma vitória impressionante nas 24 Horas de Le Mans, demonstrando uma combinação de velocidade, resistência e estratégia impecável. O GR010 Hybrid mostrou-se imbatível, dominando a corrida desde o início.</p>
      <p style="text-align: right; margin: 0px 0px 0px 10px;">Yago</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Postagem'
  }
  </script>
  
  <style scoped>
  .post {
    width: 80%;
    max-width: 600px;
    margin-bottom: 20px;
    text-align: center;
    position: relative;
  }
  
  figure {
    margin: 0;
    position: relative;
  }
  
  .caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
  </style>
  
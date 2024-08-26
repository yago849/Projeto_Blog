<template>
    <div class="post">
      <figure>
        <figcaption class="caption">2023</figcaption>
        <img alt="Ferrari" src="../assets/2023.jpg" />
      </figure>
      <p>Em 2023, a Ferrari voltou ao topo do pódio em Le Mans após décadas de ausência.
         O retorno triunfante da Scuderia foi marcado por uma performance impecável do 499P,
          que levou a equipe italiana a uma vitória histórica na corrida de resistência mais prestigiada do mundo.</p>
      <p style="text-align: right; margin: 0px 0px 0px 10px;">Yago</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Postagem2'
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
  
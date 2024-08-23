<script setup>
import Destinos from "./components/Destinos.vue";
</script>

<template>
  <Destinos/>
  <div>
      <div class="container">
        <h1>Carros Vencedores de Le Mans</h1>
        <div class="item carro">
          <img src="./assets/2022.jpg"/>
          <h3>breve descição</h3>
          <span class="ano">2022</span>
        </div>

        <div class="item carro">
          <img src="./assets/2023.jpg"/>
          <h3>breve descição</h3>
          <span class="ano">2023</span>
        </div>

        <div class="item carro">
          <img src="/src/assets/2024.jpg"/>
          <h3>breve descição</h3>
          <span class="ano">2024</span>
        </div>

      </div>
    </div>
</template>

<style scoped>

      template {
        justify-content: center;
        align-items: center;
      }

      .container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      .img {
        width: 200px;
      }
      .item {
        margin: 10px 0;
        padding: 20px;
        width: 600px;
        text-align: center;
      }

      .carro {
        position: relative;
        margin: 20px;
        width: 600px;
        height: 350px;
      }

      .carro img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }

      .carro .ano {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 60px;
        font-weight: bold;
        color: #fff;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }
</style>

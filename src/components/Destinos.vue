<template>
  <div>
    <div class="container">
      <h1>Carros Vencedores de Le Mans</h1>
      <div class="item carro">
        <img
          :src="require('@/assets/2022.jpg')"
          alt="Toyota"/>
        <span class="ano">2022</span>
        <p>
          
        </p>
      </div>
      <div class="item carro">
        <img
          :src="require('@/assets/2023.jpg')"
          alt="Ferrari"/>
        <span class="ano">2023</span>
        <p>
        </p>
      </div>
      <div class="item carro">
        <img
          :src="require('@/assets/2024.jpg')"
          alt="Ferrari"/>
        <span class="ano">2022</span>
        
        <p>
          
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Destinos',
};
</script>

<style scoped>
body,
html {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
}

.img {
  width: 600px;
  height: 350px;
  object-fit: cover;
}

.item {
  margin: 10px 0;
  padding: 20px;
  width: 600px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

h2 {
  margin-top: 10px;
  color: #333;
}

p {
  font-size: 16px;
  color: #666;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
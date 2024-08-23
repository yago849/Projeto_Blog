<scrit>

</scrit>

<template>
    <div class="container">
      <div class="item carro">
        <img src="./assets/2023.jpg"/>
        <h3>breve descição</h3>
        <span class="ano">2023</span>
        </div>
    </div>

</template>

<style>
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
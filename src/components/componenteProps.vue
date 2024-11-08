<script>
export default {
  name: 'componenteProps',
  props: {
    imagem: String,
    conteudo: String,
    autor: String
  }
}
</script>

<template>
  <div class="post-card">
    <div class="post">
      <div class="image-container">
        <img :src="imagem" alt="" class="post-image">
      </div>
      <p class="post-content">{{ conteudo }}</p>
      <h2 class="post-author">{{ autor }}</h2>
    </div>
  </div>
</template>

<style scoped>

.post-card {
  background-color: #004aad; 
  border: 4px solid #ff1100; 
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  transition: transform 0.3s;
}

.post-card:hover {
  transform: scale(1.05); 
}

.post {
  text-align: center;
}

.image-container {
  margin-bottom: 20px;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
}

.post-image {
  width: 100%; 
  height: 100%; 
  object-fit: cover;
}

.post-content {
  font-size: 1.5em; 
  margin: 10px 0;
  color: white;
}

.post-author {
  font-size: 1.2em; 
  text-align: right;
  margin: 10px 0;
  color: #ffffff; 
}
</style>

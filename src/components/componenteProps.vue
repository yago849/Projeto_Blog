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
  <div class="post">
    <div class="image-container">
      <img :src="imagem" alt="" class="post-image">
    </div>
    <p class="post-content">{{ conteudo }}</p>
    <h2 class="post-author">{{ autor }}</h2>
  </div>
</template>

<style>
.post {
  width: 80%;
  max-width: 600px;
  margin: 0 auto 20px;
  text-align: center;
  position: relative;
}

.image-container {
  margin-bottom: 40px;
  padding: 30px;
}

.post-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.post-content {
  text-align: center;
  margin: 10px 0;
}

.post-author {
  text-align: right;
  margin: 0 10px;
}

</style>

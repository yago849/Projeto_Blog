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
    <div>
        <img :src="imagem">
        <p>{{ conteudo }}</p>
        <h2 style="text-align: right; margin: 0px 0px 0px 10px;">{{ autor }} </h2>
    </div>

</template>

<style>
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



p {
    text-align: center;
    margin: 0px 0px 0px 10px;
}

h2 {
    text-align: right;
    margin: 0px 0px 0px 10px;
}

</style>
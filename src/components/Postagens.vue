<script setup>
    import PostModelo from "./ModelPost.vue"
    import imagem1 from "../assets/2022.jpg"
    import imagem2 from "../assets/2023.jpg"
    import imagem3 from "../assets/2024.jpg"
</script>

<template>
    <div class="post">
        <PostModelo 
          titulo="A Consolidação da Ferrari"
          corpoDoTexto="
          Em 2024, a Ferrari consolidou sua hegemonia em Le Mans com uma vitória consecutiva,
         provando que o sucesso do ano anterior não foi apenas sorte.
          A equipe demonstrou uma incrível consistência e habilidade técnica,
           garantindo sua posição como uma das maiores na história do automobilismo.
          "
          autor="Yago"
          :imagem="imagem1"
        />
    </div>

    <div class="post">
        <PostModelo 
          titulo="A Vitória da Toyota"
          corpoDoTexto="
          Em 2022, a Toyota conquistou uma vitória impressionante nas 24 Horas de Le Mans, 
        demonstrando uma combinação de velocidade, resistência e estratégia impecável. 
        O GR010 Hybrid mostrou-se imbatível, dominando a corrida desde o início.
          "
          autor="Yago"
          :imagem="imagem2"
        />
    </div>

    <div class="post">
        <PostModelo 
          titulo="A Volta da Ferrari"
          corpoDoTexto="
          Em 2023, a Ferrari voltou ao topo do pódio em Le Mans após décadas de ausência.
         O retorno triunfante da Scuderia foi marcado por uma performance impecável do 499P,
          que levou a equipe italiana a uma vitória histórica na corrida de resistência mais prestigiada do mundo.
          "
          autor="Yago"
          :imagem="imagem3"
        />
    </div>
</template>

<style>
    /* Estilo do container do post */
    .post {
        display: flex;
        align-items: center;
        background-color: #333333; /* Fundo escuro para dar a sensação de velocidade e resistência */
        color: #FFFFFF; /* Texto claro para contraste */
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5); /* Sombra para dar destaque aos cards */
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        max-width: 800px; /* Limita a largura do card */
        width: 100%; /* Faz o card ocupar toda a largura possível até o limite */
        margin: 0 auto; /* Centraliza os cards na tela */
        min-height: 250px; /* Aumenta a altura mínima do card */
    }

    /* Efeito de hover para o card */
    .post:hover {
        transform: scale(1.02); /* Leve aumento do card ao passar o mouse */
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.7); /* Sombra mais intensa ao passar o mouse */
    }

    /* Estilo para a imagem */
    img {
        width: 150px; /* Diminuindo a largura da imagem */
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Sombra suave para destacar as imagens */
        margin-right: 20px; /* Espaçamento entre a imagem e o texto */
    }

    /* Estilo para o conteúdo do post */
    .post-content {
        flex: 1; /* Faz o conteúdo ocupar o restante do espaço */
    }

    /* Estilo para o título do post */
    .post h2 {
        font-size: 1.6em; /* Ajuste do tamanho do título */
        font-weight: 700;
        color: #FFD700; /* Dourado para dar destaque ao título */
        margin-bottom: 10px;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Sombra para destacar o título */
    }

    /* Estilo para o corpo do texto */
    .post p {
        font-size: 1em;
        line-height: 1.5;
        margin-bottom: 15px;
        color: #E0E0E0; /* Texto mais suave */
    }

    /* Estilo do autor */
    .autor {
        font-size: 0.9em;
        color: #FFD700; /* Dourado para destacar o autor */
        font-weight: bold;
        margin-top: 10px;
    }
</style>



<script>

</script>

<template>
    <div class="tela-login">
        <div class="login">
            <h1>login</h1>
            <form method="post" class="formulario">

                <div class="caixa1">
                    <label for="email">Email</label>
                    <input type="text" placeholder="Digite o Email!!!" name="email">
                </div>

                <p class="epo" style="widht: 500px;">usuario@admin.com.br</p>

                <div class="caixa2">
                    <label for="senha">Senha</label>
                    <input type="password" placeholder="Digite a Senha!!!" name="senha">
                    <i class="bi bi-eye-fill"></i>
                </div>

                <hr>

                <button type="button" class="btn btn-primary">Entrar</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
i{
    position: relative;
    left: 90%;
    top: -30px;
    color: black;
    font-size: 20px;
}
</style>
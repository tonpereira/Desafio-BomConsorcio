<template>
  <div class="loginconta col-md-6 col-sm-12 col-xs-12">
    <h1 class="">Já sou <span>cliente</span></h1>
    <p class="subTitle">
      Que legal! Entre com seus dados para acessar agora mesmo a sua conta.
    </p>
    <form>
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">E-mail</label>
      </div>
      <div class="form-floating inputsenha mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Senha"
        />
        <label for="floatingPassword">Senha</label>
        <span class="input-group-text ptxt border-0">
          <i
            class="far fa-eye-slash"
            id="togglePassword"
            style="cursor: pointer"
          ></i>
        </span>
      </div>
      <p class="esqSenha"><a href="#">Esqueceu a senha?</a></p>
      <button
        type="button"
        class="btn btnAcessarConta nunito-20-semibold text-white rounded-pill"
      >
        Acessar minha conta
      </button>
    </form>
  </div>
</template>
<script>
/* eslint-disable */
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {},
  mounted() {
    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#floatingPassword");

    togglePassword.addEventListener("click", function () {
      // toggle the type attribute
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
      // toggle the eye icon
      this.classList.toggle("fa-eye");
      this.classList.toggle("fa-eye-slash");
    });
  },
});
</script>

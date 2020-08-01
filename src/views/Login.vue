<template>
  <t-card class="child-view t-login">
    <div class="t-login__logo">
      <img
        src="https://ticketpass.org/_nuxt/dist/948663e9104105656d0c7334673f7c7f.svg"
        alt="ticketpass logo"
      />
    </div>
    <form id="login" @submit.prevent="login" class="t-login-form">
      <div class="t-login-form__input">
        <t-input-text
          v-model.trim="username"
          type="email"
          id="username"
          name="username"
          label="Email"
          placeholder="example@ticketpass.com"
          :erros="usernameErros"
          @focus="usernameClearErros"
        />
      </div>
      <div class="t-login-form__input">
        <t-input-text
          v-model="password"
          type="password"
          id="password"
          name="password"
          placeholder
          :erros="passwordErros"
          @focus="passwordClearErros"
        >
          <template v-slot:label>
            <div class="space-between">
              <span>Password</span>
              <router-link to="/not-found" class="t-link" tabindex="0">Forgot password?</router-link>
            </div>
          </template>
        </t-input-text>
      </div>
      <div class="t-login-form__button">
        <t-btn :loading="isLoginIn">
          Login
        </t-btn>
      </div>
      <div class="text-center">
        <router-link to="/signup" class="t-link">Create an account</router-link>
      </div>
    </form>
  </t-card>
</template>

<script>
import { useLoading } from "../functions/useLoading.js";
import { useValidator } from "../functions/useValidator.js";
import { validateEmail } from "../helpers/validateEmail.js";
import { validatePassword } from "../helpers/validatePassword.js";
import { authentication, singup } from "../service/auth.js";
import getColor from "../helpers/getColor.js";
import Toastify from 'toastify-js'

export default {
  name: "Login",
  methods: {
    async login() {
      if (this.isLoginIn) return;
      if (!this.usernameValidateErros()) return;
      if (!this.passwordValidateErros()) return;
      try {
        this.toggleLoginIn();
        await authentication({
          username: this.username,
          password: this.password
        })
        this.$router.push({ name: 'Dashboard' })
      } catch (error) {
        Toastify({
          text: error.message,
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: getColor('error')
        }).showToast();
      } finally {
        this.toggleLoginIn();
      }
    }
  },
  setup() {
    const { isLoading: isLoginIn, toggleLoading: toggleLoginIn } = useLoading(
      false
    );

    const {
      input: username,
      erros: usernameErros,
      isValid: usernameIsValid,
      clearErros: usernameClearErros,
      validateErros: usernameValidateErros,
    } = useValidator({
      input: "",
      validator: validateEmail,
    });
    const {
      input: password,
      erros: passwordErros,
      isValid: passwordIsValid,
      clearErros: passwordClearErros,
      validateErros: passwordValidateErros,
    } = useValidator({
      input: "",
      validator: validatePassword,
    });

    return {
      username,
      usernameErros,
      usernameIsValid,
      usernameClearErros,
      usernameValidateErros,
      password,
      passwordErros,
      passwordIsValid,
      passwordClearErros,
      passwordValidateErros,
      isLoginIn,
      toggleLoginIn,
    };
  },
};
</script>

<style lang="scss">
.t-login {
  width: 300px;
  padding: 30px 15px;
  &__logo {
    text-align: center;
    > img {
      margin: 10px 0px;
      width: 200px;
    }
  }
  .t-login-form {
    margin: auto;
    width: 250px;
    &__input {
      margin: 20px 0px;
    }
    &__button {
      margin: 5px 0px;
      text-align: center;
    }
  }
}
</style>

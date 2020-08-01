<template>
  <t-card class="child-view t-sing-up">
    <div class="t-sing-up__logo">
      <img
        src="https://ticketpass.org/_nuxt/dist/948663e9104105656d0c7334673f7c7f.svg"
        alt="ticketpass logo"
      />
      <h1 class="t-sing-up__call">Create an accout to continue</h1>
    </div>
    <form id="sing-up" @submit.prevent="singUp" class="t-sing-up-form">
      <div>
        <t-input-text
          v-model.trim="name"
          type="text"
          id="name"
          name="name"
          label="Name"
          placeholder="John Doe"
          :erros="nameErros"
          @focus="nameClearErros"
        />
      </div>
      <div class="t-sing-up-form__input">
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
      <div class="t-sing-up-form__input">
        <t-input-text
          v-model="password"
          type="password"
          id="password"
          placeholder="••••••"
          name="password"
          label="Password"
          :erros="passwordErros"
          @focus="passwordClearErros"
        >
        </t-input-text>
      </div>
      <div class="t-sing-up-form__button">
        <t-btn :loading="isSigningUp">
          Sing up
        </t-btn>
      </div>
      <div class="text-center">
        <router-link :to="{ name: 'Login' }" class="t-link">
          Already have an account?
        </router-link>
      </div>
    </form>
  </t-card>
</template>

<script>
import { useLoading } from "../functions/useLoading.js";
import { useValidator } from "../functions/useValidator.js";
import { validateName } from "../helpers/validateName.js";
import { validateEmail } from "../helpers/validateEmail.js";
import { validatePassword } from "../helpers/validatePassword.js";
import { authentication, singUp } from "../service/auth.js";
import getColor from "../helpers/getColor.js";
import Toastify from 'toastify-js'

export default {
  name: "Signup",
  methods: {
    async singUp() {
      if (this.isSigningUp) return;
      if (!this.nameValidateErros()) return;
      if (!this.usernameValidateErros()) return;
      if (!this.passwordValidateErros()) return;
      try {
        this.toggleSignup();
        await singUp({
          name: this.name,
          username: this.username,
          password: this.password
        })
        Toastify({
          text: 'Account created',
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: getColor('sucess')
        }).showToast();
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
        this.toggleSignup();
      }
    }
  },
  setup() {
    const { isLoading: isSigningUp, toggleLoading: toggleSignup } = useLoading(
      false
    );

    const {
      input: name,
      erros: nameErros,
      isValid: nameIsValid,
      clearErros: nameClearErros,
      validateErros: nameValidateErros,
    } = useValidator({
      input: "",
      validator: validateName,
    });
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
      name,
      nameErros,
      nameIsValid,
      nameClearErros,
      nameValidateErros,
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
      isSigningUp,
      toggleSignup,
    };
  },
};
</script>

<style lang="scss">
.t-sing-up {
  width: 300px;
  padding: 30px 15px;
  &__call {
    font-size: 0.9em;
    font-weight: 300;
    margin-top: 0;
  }
  &__logo {
    text-align: center;
    > img {
      margin: 10px 0px;
      width: 200px;
    }
  }
  .t-sing-up-form {
    margin: auto;
    width: 250px;
    &__input {
      margin: 20px 0px;
    }
    &__button {
      margin: 5px 0px 10px 0px;
      text-align: center;
    }
  }
}
</style>

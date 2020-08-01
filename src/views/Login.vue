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
          v-model="username"
          type="email"
          id="username"
          name="username"
          label="Email"
          placeholder="example@ticketpass.com"
          tabindex="1"
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
          tabindex="2"
          :erros="passwordErros"
          @focus="passwordClearErros"
        >
          <template v-slot:label>
            <div class="space-between">
              <span>Password</span>
              <router-link to="/not-found" class="forgot-password" tabindex="4">Forgot password?</router-link>
            </div>
          </template>
        </t-input-text>
      </div>
      <div class="t-login-form__button">
        <button tabindex="3" id="login-button" :disabled="isLoginIn">submit</button>
      </div>
    </form>
  </t-card>
</template>

<script>
import { useLoading } from "../functions/useLoading.js";
import { useValidator } from "../functions/useValidator.js";
import { validateEmail } from "../helpers/validateEmail.js";
import { validatePassword } from "../helpers/validatePassword.js";

export default {
  name: "Login",
  methods: {
    async login() {
      if (this.isLoginIn) return;
      if (!this.usernameValidateErros()) return;
      if (!this.passwordValidateErros()) return;
      try {
        this.toggleLoginIn();
        console.log({
          username: this.username,
          password: this.password
        })
      } catch (error) {
        console.log("error", error);
      } finally {
        this.toggleLoginIn();
      }
      console.log("login");
    },
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
.space-between {
  display: flex;
  justify-content: space-between;
}
.forgot-password {
  text-decoration: none;
  color: #737373;
}
</style>

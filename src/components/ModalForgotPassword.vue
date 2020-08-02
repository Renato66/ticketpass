<template>
  <a class="t-link" tabindex="0" @click.prevent="open = true">Forgot password?</a>
  <t-modal v-model="open">
    <t-card>
      <h1>Forgot your password?</h1>
      <p>
        Enter the email address that you used to sign up so we can send you a password reset link.
      </p>
      <form id="forgot" @submit.prevent="resetLink" >
        <t-input-text
          v-model.trim="email"
          type="email"
          id="email"
          name="email"
          label="Email"
          :erros="emailErros"
          @focus="emailClearErros"
          autofocus="true"
        />
        <div class="text-center t-forgot__button">
          <t-btn :loading="isLoading">
            Send link
          </t-btn>
        </div>
      </form>
    </t-card>
  </t-modal>
</template>

<script>
import { useLoading } from "../functions/useLoading.js";
import { useValidator } from "../functions/useValidator.js";
import { validateEmail } from "../helpers/validateEmail.js";
import { forgotPassword } from "../service/auth.js";
import Toastify from 'toastify-js'
import getColor from "../helpers/getColor.js";

export default {
  data () {
    return {
      open: false
    }
  },
  methods: {
    async resetLink () {
      if (this.isLoading) return;
      if (!this.emailValidateErros()) return;
      try {
        this.toggleLoading()
        await forgotPassword(this.email)
        Toastify({
          text: `Reset link sent to ${this.email}`,
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: getColor("sucess"),
        }).showToast();
        this.email = ''
        this.open = false
      } catch (error) {
        Toastify({
          text: error.message,
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: getColor('error')
        }).showToast();
      } finally {
        this.toggleLoading()
      }
    }
  },
  setup () {
    const { isLoading, toggleLoading } = useLoading(
      false
    );

    const {
      input: email,
      erros: emailErros,
      isValid: emailIsValid,
      clearErros: emailClearErros,
      validateErros: emailValidateErros,
    } = useValidator({
      input: "",
      validator: validateEmail,
    });

    return {
      isLoading,
      toggleLoading,
      email,
      emailErros,
      emailIsValid,
      emailClearErros,
      emailValidateErros
    };
  }
};
</script>

<style lang="scss">
.t-forgot{
  &__button {
    width: 210px;
    margin: 10px auto
  }
}
</style>
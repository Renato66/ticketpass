<template>
  <t-card class="child-view t-sign-up">
    <div class="t-sign-up__logo">
      <img
        src="https://ticketpass.org/_nuxt/dist/948663e9104105656d0c7334673f7c7f.svg"
        alt="ticketpass logo"
      />
      <h1 class="t-sign-up__call">Create an accout to continue</h1>
    </div>
    <form id="sign-up" @submit.prevent="signUp" class="t-sign-up-form">
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
      <div class="t-sign-up-form__input">
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
      <div class="t-sign-up-form__input">
        <t-input-text
          v-model="password"
          type="password"
          id="password"
          placeholder="••••••"
          name="password"
          label="Password"
          :erros="passwordErros"
          @focus="passwordClearErros"
        ></t-input-text>
      </div>
      <div class="t-sign-up-form__checkbox">
        <t-checkbox v-model="agreeWithTerms" name="terms">
          I accept
          <a class="primary--text t-link" @click="openTerms = true"
            >terms and conditions</a
          >
        </t-checkbox>
      </div>
      <div class="t-sign-up-form__button">
        <t-btn :loading="isSigningUp">Sign up</t-btn>
      </div>
      <div class="text-center">
        <router-link :to="{name: 'Login'}" class="t-link"
          >Already have an account?</router-link
        >
      </div>
    </form>
    <ModalTerms v-model="openTerms"></ModalTerms>
  </t-card>
</template>

<script>
import {useLoading} from '../functions/useLoading.js'
import {useValidator} from '../functions/useValidator.js'
import {validateName} from '../helpers/validateName.js'
import {validateEmail} from '../helpers/validateEmail.js'
import {validatePassword} from '../helpers/validatePassword.js'
import {authentication, signUp} from '../service/auth.js'
import getColor from '../helpers/getColor.js'
import Toastify from 'toastify-js'
import ModalTerms from '../components/ModalTerms.vue'

export default {
  name: 'Signup',
  components: {
    ModalTerms
    // BUG: ModalTerms: () => import('../components/ModalTerms.vue')
  },
  data() {
    return {
      openTerms: false,
      agreeWithTerms: false
    }
  },
  methods: {
    async signUp() {
      if (this.isSigningUp) return
      if (!this.nameValidateErros()) return
      if (!this.usernameValidateErros()) return
      if (!this.passwordValidateErros()) return
      try {
        this.toggleSignup()
        await signUp({
          name: this.name,
          username: this.username,
          password: this.password
        })
        Toastify({
          text: 'Account created',
          duration: 3000,
          gravity: 'top',
          position: 'right',
          backgroundColor: getColor('sucess')
        }).showToast()
        await authentication({
          username: this.username,
          password: this.password
        })
        this.$router.push({name: 'Dashboard'})
      } catch (error) {
        Toastify({
          text: error.message,
          duration: 3000,
          gravity: 'top',
          position: 'right',
          backgroundColor: getColor('error')
        }).showToast()
      } finally {
        this.toggleSignup()
      }
    }
  },
  setup() {
    const {isLoading: isSigningUp, toggleLoading: toggleSignup} = useLoading(
      false
    )

    const {
      input: name,
      erros: nameErros,
      isValid: nameIsValid,
      clearErros: nameClearErros,
      validateErros: nameValidateErros
    } = useValidator({
      input: '',
      validator: validateName
    })
    const {
      input: username,
      erros: usernameErros,
      isValid: usernameIsValid,
      clearErros: usernameClearErros,
      validateErros: usernameValidateErros
    } = useValidator({
      input: '',
      validator: validateEmail
    })
    const {
      input: password,
      erros: passwordErros,
      isValid: passwordIsValid,
      clearErros: passwordClearErros,
      validateErros: passwordValidateErros
    } = useValidator({
      input: '',
      validator: validatePassword
    })

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
      toggleSignup
    }
  }
}
</script>

<style lang="scss">
.t-sign-up {
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
  .t-sign-up-form {
    margin: auto;
    width: 250px;
    &__input {
      margin: 20px 0px;
    }
    &__checkbox {
      margin: 20px 0px;
    }
    &__button {
      margin: 5px 0px 10px 0px;
      text-align: center;
    }
  }
}
</style>

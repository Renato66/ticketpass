<template>
  <t-card class="child-view">
    <h1>Login</h1>
    <t-input-text v-model="username" type="email" name="username" label="Email" placeholder="example@ticketpass.com" />
    <t-input-text v-model="password" type="password" name="password" placeholder="">
      <template v-slot:label>
        <div class="space-between">
          <span>Password</span>
          <a href="/forgot-password" class="forgot-password">Forgot password?</a>
        </div>
      </template>
    </t-input-text>
  </t-card>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
<style>
.space-between {
  display: flex;
  justify-content: space-between;
}
.forgot-password {
  text-decoration: none;
  color: #737373;
}
</style>

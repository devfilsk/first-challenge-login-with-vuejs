<template>
  <form @submit.prevent="submit()">
    <div class="login-page">
      <div class="card">
        <div class="card-header">Login</div>
        <input 
          required
          type="text" 
          class="form-control" 
          placeholder="E-mail"
          v-model="form.email">
        <input 
          required
          type="password" 
          class="form-control" 
          placeholder="Senha"
          v-model="form.password">
        <button type="submit" @click="submit()">Entrar</button>
      </div>
      {{ form.email }}
    </div>
  </form>
</template>

<script>
// import { mapActions } from 'vuex';
// import api from '../../../../core/services/api';

export default {
  name:"Login" ,
  data: () => ({
    form: {
      email: "",
      password: ""
    },
    response: {}
  }),
  created() {
    // this.ActionSetUser({ name: "Filipe", email: "filipe@gmail.com" })
  },
  mothods: {
    submit () {
      alert("hello", this.forms);
      // const response = await api.post('login', this.form); 
      // eslint-disable-next-line
      console.log(this.form)

      // this.response = response;
    }
  },

}
</script>

<style>
.login-page {
  display: flex;
  background-color: #c5c5c5;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
}
.card{
  display: flex;
  flex-direction: column;
}
.card input {
  padding: 12px 12px;
  margin-top: 20px;
  border-radius: 4px;
  width: 250px;
}
.card input:focus {
  outline: none;
}
.card button {
  width: 100%;
  padding: 12px 0;
  margin-top: 30px;
  border-radius: 4px;
  background-color: #353535;
  color: #FFF;
  font-size: 16px;
  cursor: pointer;
  transition: all .3s;
}
.card button:hover {
  opacity: .7;
}
</style>
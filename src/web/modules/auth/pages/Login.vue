<template>
  <div class="login-page">
    <div class="card">
      <div class="card-header">Login</div>
      <input type="text" class="form-control" placeholder="E-mail">
      <input type="text" class="form-control" placeholder="Senha">
    </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style>
.login-page {
  display: flex;
  flex: 1;
  background-color: #c5c5c5;
  align-items: center;
  justify-content: center;
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
</style>
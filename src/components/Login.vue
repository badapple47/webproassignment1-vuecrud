/* eslint-disable */
<template>
  <div class="login">


<div class="panel panel-default" id="login-panel">
  <div class="panel-heading">
    <h3 class="panel-title">Login</h3>
  </div>
  <div class="panel-body">
        <form>
  User name:<br>
  <input type="text" name="username"><br>
  User password:<br>
  <input type="password" name="psw">
</form>
<br>
<router-link to="/home" id ="login-Btn" type="button" class="btn btn-primary">Primary</router-link>


  </div>
</div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'EGCO427'
    }
  }
}

</script>

<style >


  #login-panel {
      height: 220px;
    width: 400px;


 position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -200px;
  }

  #login-Btn {
      margin-bottom: 300px;
  }


</style>


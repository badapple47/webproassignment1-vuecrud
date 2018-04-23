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
  <input type="text" name="username" placeholder="username" v-model="User.username"><br>
  User password:<br>
  <input type="password" name="psw" placeholder="password" v-model="User.password">
</form>
<br>
<!-- <router-link to="/home" id ="login-Btn" type="button" class="btn btn-primary" @click="addToAPI">Login</router-link> -->
<button class="btn btn-default" @click="addToAPI" > Login </button>


  </div>
</div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      msg: 'EGCO427',
       User: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    addToAPI () {
      let newUser = {
        username: this.User.username,
        password: this.User.password,
     
      }
      console.log(newUser)
      axios.post('http://localhost:8082/authen', newUser)
        .then((response) => {
          console.log(response.data)
          if(response.data == "Okay!"){
            console.log("Okay let's go")
            localStorage.setItem('Token', 'asdasdasdasd');
           window.location.href = "http://localhost:8080/#/home"

          }
        })
        .catch((error) => {
          console.log(error)
        })
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


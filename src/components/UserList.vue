<template>
  <div class="container">
    <h1>List of Users</h1>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for..." v-model="search">
            <span class="input-group-btn">
              <button class="btn btn-primary" type="button">
                <span class="glyphicon glyphicon-search"></span>
              </button>
              <router-link to="/adduser" tag="button"  class="btn btn-success" type="button">
                <span class="glyphicon glyphicon-plus"></span>
              </router-link>
            </span>
          </div>
          <!-- /input-group -->
        </div>
        <!-- /.col-lg-6 -->
      </div>
      <!-- /.row -->
    </div>
    <table class="table table-stripped table-borderes">
      <thead>
        <tr>
          <th class="center">First Name</th>
          <th class="center">Last Name</th>
          <th class="center">Email</th>
          <th class="center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="users in filteredUsers" v-bind:key="users._id">
          <td class="text-left">
            {{users.firstName}}
          </td>
          <td class="text-left">
            {{users.lastName}}
          </td>
          <td class="text-left">
            {{users.email}}
          </td>
          <td class="text-left">
            <router-link :to="{ path: 'updateuser/' + users._id}" class="btn btn-xs btn-warning" tag="button" type="button">
              <span class="glyphicon glyphicon-pencil"></span>
            </router-link>
            <button class="btn btn-xs btn-danger" data-toggle="modal" data-target=".bd-example-modal-sm" @click="DELETE(users._id)"><span class="glyphicon glyphicon-trash"></span></button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal fade bd-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">Are you sure?</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this item? </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <router-link to="/" class="btn btn-danger" tag="button" type="button">
              <span @click="delUser(uid)">Delete</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'users',
  data () {
    return {
      Users: [],
      uid: '',
      search: ''
    }
  },
  methods: {
    delUser (userId) {
      var url = 'http://localhost:3000/users/' + userId
      axios.delete(url)
        .then((response) => {
          console.log('Delete UserId: ' + userId)
        })
        .catch((error) => {
          console.log(error)
        })
      window.location.reload()
    },
    DELETE (id) {
      // eslint-disable-next-line
      $('#my-modal').modal('show')
      this.uid = id
    }
  },
  computed: {
    filteredUsers: function () {
      return this.Users.filter((user) => {
        return user.firstName.match(this.search)
      })
    }
  },
  mounted () {
    axios.get('http://localhost:3000/users')
      .then((response) => {
        console.log(response.data)
        this.Users = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

</script>

<style>

</style>

<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import HelloWorld from '../components/HelloWorld.vue';
</script>

<template>
  <main>
      <h1>Sign <br> In</h1>
      <span>Email</span><br>
      <input 
        v-model="email"
        type="text"
        placeholder="Enter your email" 
      /><br>
      <label>password</label><br>
      <input 
        v-model="password"
        type="password" 
        placeholder="Enter your password"
      ><br>
      <button @click="login">Submit</button>
  </main>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
    data: ()=> ({
        password: "",
        email: "",
    }),
    methods: {
      login() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
            // Signed in 
            alert("signed in!");
            this.$router.push({
              name: 'home'
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
      }
    },
  };
</script>

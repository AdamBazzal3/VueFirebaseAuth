<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import HelloWorld from '../components/HelloWorld.vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
</script>

<template>
  <main>
    <h1>Sign <br> Up</h1>
        <span>Email</span><br>
      <input 
        v-model="email"
        type="email"
        placeholder="Enter your email" 
      /><br>
      <label>password</label><br>
      <input 
        v-model="password"
        type="password" 
        placeholder="Enter your password"
      ><br>
      <button @click="signUp">Submit</button>
  </main>
</template>

<script>
export default {
    data: ()=> ({
        password: "",
        email: "",
    }),
    methods: {
      signUp() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
            // Signed in 
            alert("signed up!");
            this.$router.push({
              name: 'home'
            })
            // ...
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

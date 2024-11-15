<template>
  <form class="form" @submit.prevent="addUser(user)" >
    <h2>Formulario agregar usuario</h2>
    <input type="text" v-model="user.name" placeholder="Nombre" required />
    <input type="email" v-model="user.email" placeholder="Email" required />
    <button type="submit">Agregar</button>
  </form>
</template>

<script>
import { mapActions } from "vuex/dist/vuex.cjs.js";

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    ...mapActions(["addUser"]),
  },
};
</script>

<style scoped>
.form {
  width: 300px;
  margin: 10px auto;
  padding: 40px 20px;
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

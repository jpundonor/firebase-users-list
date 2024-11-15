<template>
  <h2>Lista de usuarios</h2>
  <div class="users-list">
    <div class="users" v-for="user in users" :key="user.id">
      <div class="user" v-if="editingUser !== user.id">
        <p>Nombre: {{ user?.name }}</p>
        <p>Email: {{ user?.email }}</p>
        <div>
          <button @click="deleteUser(user?.id)">Eliminar</button>
          <button @click="editUser(user?.id)">Editar</button>
        </div>
      </div>
      <div class="user" v-else>
        <label>Editar Nombre</label>
        <input type="text" v-model="user.name" placeholder="Nombre" />
        <label>Editar Email</label>
        <input type="email" v-model="user.email" placeholder="Email" />
        <div>
          <button @click="update(user)">Actualizar</button>
          <button @click="cancelEditing()">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UsersList",
  data() {
    return {
      editingUser: null,
    };
  },
  computed: {
    ...mapGetters(["users"]),
  },
  methods: {
    ...mapActions(["fetchUsers", "deleteUser", "updateUser"]),
    editUser(userId) {
      this.editingUser = userId;
    },
    update(user) {
      this.updateUser(user);
      this.editingUser = null;
    },
    cancelEditing() {
      this.editingUser = null;
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.users-list {
  width: 100%;
  display: flex;
  gap: 10px;
}
.users {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px 0px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 250px;
  height: 190px;
}
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  /* padding: 0px 10px; */
}
.user p {
  margin: 0px;
}
</style>

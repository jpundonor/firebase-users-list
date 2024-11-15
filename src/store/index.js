import { createStore } from "vuex";
import firebaseApp from "../firebaseconfig";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const store = createStore({
  state() {
    return {
      users: [],
    };
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    fetchUsers({ commit }) {
      try {
        const db = getFirestore(firebaseApp);
        const usersRef = collection(db, "users");
        onSnapshot(usersRef, (snapshot) => {
          const users = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          commit("setUsers", users);
        });
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    },
    async addUser({}, user) {
      try {
        const db = getFirestore(firebaseApp);
        const usersRef = collection(db, "users");
        await addDoc(usersRef, user);
      } catch (error) {
        console.error("Error adding user: ", error);
      }
    },
    async deleteUser({}, userId) {
      try {
        const db = getFirestore(firebaseApp);
        const userRef = doc(db, "users", userId);
        await deleteDoc(userRef);
      } catch (error) {
        console.error("Error deleting user: ", error);
      }
    },
    async updateUser({}, user) {
      try {
        const db = getFirestore(firebaseApp);
        const userRef = doc(db, "users", user.id);
        await setDoc(userRef, user);
      } catch (error) {
        console.error("Error updating user: ", error);
      }
    },
  },
  getters: {
    users(state) {
      return state.users;
    },
  },
});

export default store;

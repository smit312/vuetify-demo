 <template>
  <div>
    <v-app-bar color="deep-black accent-4" dense dark min-width="300">
      <v-toolbar-title>{{ showRoomName }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn plain v-if="this.isAuth" @click="openModal">Add Car</v-btn>

      <v-btn plain v-if="this.isAuth">Home</v-btn>
      <router-link to="/login">
        <v-btn plain v-if="!this.isAuth"> Login</v-btn>
      </router-link>
      <router-link to="/register">
        <v-btn plain v-if="!this.isAuth"> Register</v-btn>
      </router-link>

      <v-btn plain v-if="this.isAuth" @click.prevent="logoutHandler">
        Logout</v-btn
      >
    </v-app-bar>
  </div>
  <!-- <header
    class="pt-2 pb-2"
    style="background-color: #141c2f; border-bottom: 2px solid #1f2a48"
  >
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="text-light">
          {{ showRoomName }}
        </h1>
        <div class="text-right">
          <b-button
            variant="outline-light"
            pill
            v-b-modal.modal-prevent-closing
            style="background-color: #1f2a48"
            v-if="this.isAuth"
            class="shadow-lg border-none bottom-0 start-0 ms-5"
            >Add Car</b-button
          >

          <router-link to="/">
            <b-button
              variant="outline-light"
              pill
              style="background-color: #1f2a48"
              class="shadow-lg border-none bottom-0 start-0 ms-5"
              v-if="this.isAuth"
              >Home
            </b-button>
          </router-link>
          <router-link :to="{ name: 'userlogin' }">
            <b-button
              variant="outline-light"
              pill
              style="background-color: #1f2a48"
              class="shadow-lg border-none bottom-0 start-0 ms-5"
              v-if="!this.isAuth"
              >Login
            </b-button></router-link
          >
          <router-link to="/register">
            <b-button
              variant="outline-light"
              pill
              style="background-color: #1f2a48"
              class="shadow-lg border-none bottom-0 start-0 ms-5"
              v-if="!this.isAuth"
              >Register
            </b-button></router-link
          >

          <b-dropdown
            id="dropdown-right"
            right
            :text="this.userData.email"
            variant="primary"
            size="lg"
            style="background-color: #1f2a48"
            v-if="this.isAuth"
          >
            <b-dropdown-item @click.prevent="logoutHandler"
              >Logout</b-dropdown-item
            >
          </b-dropdown>
        </div>
      </div>
    </div>
  </header> -->
</template> 

<script>
export default {
  name: "NavBar",
  data() {
    return {
      showRoomName: "Car Showroom",
    };
  },

  computed: {
    isAuth() {
      return this.$store.getters["auth/getisAuth"];
    },
    userData() {
      return this.$store.getters["auth/getUser"];
    },
  },
  methods: {
    openModal() {
      this.$store.commit("ui/openDialog", { type: "add" });
    },
    logoutHandler() {
      console.log("logout called");
      this.$store.dispatch("auth/UserLogout");
    },
  },
};
</script>


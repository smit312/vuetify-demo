<template>
  <!-- <div class="container">
    <div>
      <AlertBox
        v-if="this.isLoading == false && this.successmsg !== ''"
        variant="success"
        show="true"
        :content="this.successmsg"
      />
      <AlertBox
        v-else-if="this.isLoading == false && this.errmsg !== ''"
        variant="danger"
        show="true"
        :content="this.errmsg"
      />
    </div>
    <ValidationObserver ref="observer">
      <b-form @submit="onSubmit">
        <center>
          <h1 class="mt-3">Login Page</h1>
          <ValidationProvider
            rules="required|email"
            name="uEmail"
            v-slot="{ errors }"
          >
            <b-form-group label="email" class="mb-2">
              <b-form-input
                v-model="form.uEmail"
                type="email"
                :state="errors[0] ? false : valid ? true : null"
                placeholder="Enter email"
                required
                class="w-50"
              ></b-form-input>
              <b-form-invalid-feedback>
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            :rules="{ -->
  <!-- //               required,
//               regex: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/,
//             }"
//             name="uPassword"
//             v-slot="{ errors }"
//           >
//             <b-form-group label="password" class="mb-2">
//               <b-form-input
//                 v-model="form.uPassword"
//                 type="password"
//                 :state="errors[0] ? false : valid ? true : null"
//                 placeholder="Enter password"
//                 required
//                 class="w-50"
//               ></b-form-input>
//               <b-form-invalid-feedback>
//                 {{ errors[0] }}
//               </b-form-invalid-feedback>
//             </b-form-group>
//           </ValidationProvider>

//           <b-button
//             pill
//             style="background-color: #1f2a48"
//             variant="outline-light"
//             type="submit"
//             >Login</b-button
//           >
//         </center>
//       </b-form>
//     </ValidationObserver>
//   </div> -->
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="onSubmit">
      <center>
        <h1>Login Page</h1>
        <validation-provider
          v-slot="{ errors }"
          rules="required|email"
          name="uEmail"
        >
          <v-text-field
            v-model="form.uEmail"
            :error-messages="errors"
            label="email"
            required
            class="shrink mx-7"
          ></v-text-field>
        </validation-provider>

        <validation-provider
          :rules="{
            required,
            regex: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/,
          }"
          name="uPassword"
          v-slot="{ errors }"
        >
          <v-text-field
            v-model="form.uPassword"
            :error-messages="errors"
            label="password"
            type="password"
            required
            class="shrink mx-7"
          ></v-text-field>
        </validation-provider>

        <v-btn class="mr-4" type="submit" :disabled="invalid"> submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </center>
    </form>
  </validation-observer>
</template>

<script>
// import AlertBox from "../components/AlertBox.vue";
// import { required, digits, email, max, regex } from "vee-validate/dist/rules";
// import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  data: () => ({
    form: {
      uEmail: "",
      uPassword: "",
    },
    isLoading: false,
    errmsg: "",
    successmsg: "",
  }),

  methods: {
    async onSubmit(event) {
      event.preventDefault();
      let res = await this.$store.dispatch("auth/loginUser", this.form);
      if (res === "success") {
        this.$router.push({ name: "home" });
      } else {
        this.errmsg = res;
      }
    },
    clear() {
      (this.form.uEmail = ""), (this.form.uPassword = "");
    },
  },
};
</script>

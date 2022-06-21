<template>
  <div>
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
          <h1 class="mt-3">Register Page</h1>
          <ValidationProvider
            rules="required|alpha_spaces"
            name="name"
            v-slot="{ errors }"
          >
            <b-form-group label="name" class="mb-2">
              <b-form-input
                v-model="form.name"
                type="text"
                :state="errors[0] ? false : valid ? true : null"
                placeholder="Enter name"
                required
                class="w-50"
              ></b-form-input>
              <b-form-invalid-feedback>
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            rules="required|email"
            name="email"
            v-slot="{ errors }"
          >
            <b-form-group label="email" class="mb-2">
              <b-form-input
                v-model="form.email"
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
            :rules="{
              required,
              regex: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/,
            }"
            name="password"
            v-slot="{ errors }"
          >
            <b-form-group label="password" class="mb-2">
              <b-form-input
                v-model="form.password"
                type="password"
                :state="errors[0] ? false : valid ? true : null"
                placeholder="Enter password"
                required
                class="w-50"
              ></b-form-input>
              <b-form-invalid-feedback>
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            :rules="{
              required,
              regex: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/,
            }"
            name="ucPassword"
            v-slot="{ errors }"
          >
            <b-form-group label="confirm password" class="mb-2">
              <b-form-input
                v-model="form.ucPassword"
                type="password"
                :state="errors[0] ? false : valid ? true : null"
                placeholder="Enter confirm password"
                required
                class="w-50"
              ></b-form-input>
              <b-form-invalid-feedback>
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider rules="required" name="role" v-slot="{ errors }">
            <b-form-group label="Role" class="mb-2">
              <b-form-select
                v-model="form.selectedrole"
                :options="form.roleoptions"
              ></b-form-select>
              <b-form-invalid-feedback>
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            rules="required"
            name="gender"
            v-slot="{ errors }"
          >
            <b-form-group label="gender" class="mb-2">
              <b-form-radio-group
                v-model="form.selectedgender"
                :options="form.genderOptions"
                :aria-describedby="ariaDescribedby"
                inline="true"
              ></b-form-radio-group>
              <b-form-invalid-feedback>
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            rules="required|numeric"
            name="age"
            v-slot="{ errors }"
          >
            <b-form-group label="age" class="mb-2">
              <b-form-input
                type="text"
                v-model="form.age"
                :state="errors[0] ? false : valid ? true : null"
                placeholder="Enter age"
                class="w-50"
              >
              </b-form-input>
              <b-form-invalid-feedback>
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider rules="required" name="dob" v-slot="{ errors }">
            <b-form-group label="Choose Date Of Birth" class="mb-2 w-50">
              <b-form-datepicker
                v-model="form.dob"
                class="mb-2"
              ></b-form-datepicker>
              <b-form-invalid-feedback>
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <b-button
            type="submit"
            pill
            style="background-color: #1f2a48"
            variant="outline-light"
            >Register</b-button
          >
        </center>
      </b-form>
    </ValidationObserver>
  </div> -->
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="onSubmit">
        <center>
          <h1>Register Page</h1>
          <validation-provider
            rules="required|alpha_spaces"
            name="name"
            v-slot="{ errors }"
          >
            <v-text-field
              v-model="form.name"
              :error-messages="errors"
              label="name"
              required
              type="text"
              class="shrink mx-7"
            ></v-text-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors }"
            rules="required|email"
            name="email"
          >
            <v-text-field
              v-model="form.email"
              :error-messages="errors"
              label="email"
              required
              class="shrink mx-7"
            ></v-text-field>
          </validation-provider>

          <validation-provider required name="password" v-slot="{ errors }">
            <v-text-field
              v-model="form.password"
              :error-messages="errors"
              label="password"
              type="password"
              required
              class="shrink mx-7"
            ></v-text-field>
          </validation-provider>
          <validation-provider
            :rules="{
              required,
              regex: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/,
            }"
            name="cPassword"
            v-slot="{ errors }"
          >
            <v-text-field
              v-model="form.ucPassword"
              :error-messages="errors"
              label="confirm password"
              type="password"
              required
              class="shrink mx-7"
            ></v-text-field>
          </validation-provider>
          <validation-provider rules="required" name="role" v-slot="{ errors }">
            <v-select
              :items="form.roleoptions"
              label="role"
              :error-messages="errors"
              v-model="form.selectedrole"
              class="shrink mx-7"
            ></v-select>
          </validation-provider>
          <validation-provider
            rules="required|numeric"
            name="age"
            v-slot="{ errors }"
          >
            <v-text-field
              type="numeric"
              v-model="form.age"
              label="Enter age"
              :error-messages="errors"
              class="shrink mx-7"
            >
            </v-text-field>
          </validation-provider>
          <validation-provider rules="required" name="dob" v-slot="{ errors }">
            <v-row justify="center">
              <v-date-picker
                v-model="form.dob"
                :error-messages="errors"
              ></v-date-picker>
            </v-row>
          </validation-provider>
          <!-- <p>Select Gender</p>
          <validation-provider
            rules="required"
            name="gender"
            v-slot="{ errors }"
          >
            <v-radio-group
              v-model="form.selectedgender"
              :error-messages="errors"
              class="shrink mx-7 ml-6"
            >
              <v-radio
                v-for="(gender, i) in genderOptions"
                :key="i"
                :label="gender"
                :value="gender"
              ></v-radio>
              <v-radio label="Radio 2" value="radio-2"></v-radio>
            </v-radio-group>
          </validation-provider> -->
          <v-btn class="mr-4" type="submit" :disabled="invalid"> submit </v-btn>
          <v-btn @click="clear"> clear </v-btn>
        </center>
      </form>
    </validation-observer>
  </div>
</template>

<script>
// import AlertBox from "../components/AlertBox.vue";
export default {
  // components: { AlertBox },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        ucPassword: "",
        age: "",
        dob: "",
        selectedrole: "null",
        roleoptions: [
          { value: null, text: "Select Role" },
          { value: "Customer", text: "Customer" },
          { value: "employee", text: "Employee" },
          { value: "admin", text: "Admin" },
        ],
        selectedgender: "male",
        genderOptions: ["male", "female"],
      },
      isLoading: false,
      errmsg: "",
      successmsg: "",
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      this.userRegister(this.form);
    },
    async userRegister(form) {
      let res = await this.$store.dispatch("auth/registerUser", form);
      if (res === "success") {
        this.$router.push({ name: "home" });
      } else {
        this.errmsg = "oops! somthing went wrong";
      }
    },
  },
};
</script>

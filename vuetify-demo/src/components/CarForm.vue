<template>
  <!-- <ValidationObserver ref="observer">
    <b-form
      ref="form"
      slot-scope="{ validate }"
      @submit.prevent="validate().then(handleSubmit)"
    >
      <ValidationProvider rules="required|alpha" name="carName">
        <b-form-group
          label="CarName"
          slot-scope="{ valid, errors }"
          label-for="name-input"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="carItem.carName"
            type="text"
            :state="errors[0] ? false : valid ? true : null"
            placeholder="Enter car name"
          ></b-form-input>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider rules="required|min:30|max:120 " name="carDetails">
        <b-form-group
          label="CarDetails"
          label-for="detail-input"
          invalid-feedback="Details between 30 to 130 character"
          slot-scope="{ valid, errors }"
          :state="nameState"
        >
          <b-form-textarea
            id="detail-input"
            v-model="carItem.carDetails"
            :state="errors[0] ? false : valid ? true : null"
            required
          ></b-form-textarea>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider rules="required" name="carImgURL">
        <b-form-group
          label="ImageURL"
          label-for="url-input"
          invalid-feedback="Must be url"
          :state="nameState"
          slot-scope="{ valid, errors }"
        >
          <b-form-input
            id="url-input"
            v-model="carItem.carImgURL"
            :state="errors[0] ? false : valid ? true : null"
            type="url"
            required
          ></b-form-input>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider rules="required|integer" name="carPrice">
        <b-form-group
          label="Price"
          label-for="Price"
          invalid-feedback="Price is required"
          :state="nameState"
          slot-scope="{ valid, errors }"
        >
          <b-form-input
            id="Price"
            v-model="carItem.carPrice"
            :state="errors[0] ? false : valid ? true : null"
            required
          ></b-form-input>
        </b-form-group>
      </ValidationProvider>
      <b-button
        type="submit"
        variant="primary"
        :class="{ shake: disabledButton }"
        @click="onButtonAnimate"
        >Submit</b-button
      >
    </b-form>
  </ValidationObserver> -->
  <div>
    <validation-observer ref="observer">
      <form @submit.prevent="handleSubmit">
        <center>
          <validation-provider
            rules="required|alpha_spaces"
            name="CarName"
            v-slot="{ errors }"
          >
            <v-text-field
              v-model="carItem.carName"
              :error-messages="errors"
              label="CarName"
              required
              type="text"
            ></v-text-field>
          </validation-provider>

          <validation-provider
            rules="required|min:30|max:120"
            name="carDetails"
          >
            <v-text-field
              v-model="carItem.carDetails"
              :error-messages="errors"
              label="CarDetails"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider rules="required" name="carImgURL">
            <v-text-field
              v-model="carItem.carImgURL"
              id="url-input"
              label="ImageURL"
              type="url"
              :error-messages="errors"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider rules="required|integer" name="carPrice">
            <v-text-field
              label="Price"
              id="Price"
              v-model="carItem.carPrice"
              required
            ></v-text-field>
          </validation-provider>
          <v-btn class="mr-4" type="submit" :disabled="invalid">
            {{ formType === "add" ? "add car" : "edit car" }}
          </v-btn>
        </center>
      </form>
    </validation-observer>
  </div>
</template>
<script>
export default {
  name: "CarForm",
  props: ["modalId"],
  data() {
    return {
      carItem: {
        carId: this.$store.getters["cars/getSelectedCarData"].carId || "",
        carName: this.$store.getters["cars/getSelectedCarData"].carName || "",
        carDetails:
          this.$store.getters["cars/getSelectedCarData"].carDetails || "",
        carImgURL:
          this.$store.getters["cars/getSelectedCarData"].carImgURL || "",
        carPrice: this.$store.getters["cars/getSelectedCarData"].carPrice || "",
      },

      disabledButton: false,
    };
  },
  computed: {
    formType() {
      return this.$store.getters["ui/getDialogType"];
    },
    selectedData() {
      return this.$store.getters["cars/getSelectedCarData"];
    },
  },
  watch: {
    selectedData(newData) {
      this.carItem.carId = newData.carId;
      this.carItem.carName = newData.carName;
      this.carItem.carDetails = newData.carDetails;
      this.carItem.carImgURL = newData.carImgURL;
      this.carItem.carPrice = newData.carPrice;
    },
  },
  methods: {
    async handleSubmit() {
      if (this.carItem.carId !== "") {
        let selectedCardData = {
          carId: this.carId,
          carName: this.carName,
          carDetails: this.carDetails,
          carImgURL: this.carImgURL,
          carPrice: this.carPrice,
        };
        await this.$store.dispatch("cars/updateCar", this.carItem);
        await this.$store.dispatch("cars/getCarsData");
        selectedCardData = {
          carId: this.carId,
          carName: this.carName,
          carDetails: this.carDetails,
          carImgURL: this.carImgURL,
          carPrice: this.carPrice,
        };
        this.$store.commit("cars/setSelectedCarData", selectedCardData);
      } else {
        await this.$store.dispatch("addcar/addCar", this.carItem);
        await this.$store.dispatch("cars/getCarsData");
      }
      this.$store.commit("ui/closeDialog");
      // this.$bvModal.hide(this.formModalId);
      // this.$nextTick(() => {
      //   this.$bvModal.hide("modal-prevent-closing");
      // });
    },
    onButtonAnimate() {
      this.disabledButton = true;
      setTimeout(() => {
        this.disabledButton = false;
      }, 1500);
    },
  },
};
</script>       
<style>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>

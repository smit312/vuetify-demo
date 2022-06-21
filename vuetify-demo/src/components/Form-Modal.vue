<template>
  <div>
    <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog
          transition="dialog-bottom-transition"
          id="modal-prevent-closing"
          max-width="600"
          ref="modal"
          modal-class="hidden"
          @shown="onShowModal"
          @hide="onHideHandler"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" v-bind="attrs" v-on="on"
              >From the bottom</v-btn
            >
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <!-- <v-toolbar color="primary" dark
                >Opening from the bottom</v-toolbar
              > -->
              <!-- <v-card-text>
                <div class="text-h2 pa-12">Hello world!</div>
              </v-card-text> -->
              <CarForm
                modalId="modal-prevent-closing"
                :formData="$props"
                v-on="$listeners"
              />
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
    <!-- <b-modal
      id="modal-prevent-closing"
      ref="modal"
      modal-class="hidden"
      title="Enter car Detail"
      hide-footer="true"
      @shown="onShowModal"
      @hide="onHideHandler"
      no-fade
    >  -->

    <!-- <CarForm
      modalId="modal-prevent-closing"
      :formData="$props"
      v-on="$listeners"
    /> -->

    <!-- </b-modal>  -->
  </div>
</template>

<script>
import CarForm from "./CarForm.vue";

export default {
  components: { CarForm },
  props: ["formData"],
  data() {
    return {
      name: "FormModal",
    };
  },
  methods: {
    onHideHandler() {
      this.$parent.selectedCardData = {
        carId: "",
        carTitle: "",
        cardetails: "",
        carPrice: "",
        carImage: "",
      };
    },
    onShowModal() {
      let m = document.getElementById("modal-prevent-closing");
      m.classList.remove("hidden");
      m.classList.add("slideInUp");
      m.classList.add("animated");
    },
  },
};
</script>
<style>
@import "animate.css";
.hidden {
  display: none !important;
}
</style>

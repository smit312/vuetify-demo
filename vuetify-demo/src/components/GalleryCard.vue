<script>
export default {
  name: "GalleryCard",
  props: ["cardId", "carTitle", "carImage", "cardetails", "price"],
  data: () => ({
    alignments: ["start", "center", "end"],
  }),
};
</script>

<template>
  <!-- <b-col
    cols="3"
    class="
      d-flex
      align-items-stretch
      ms-5
      me-2
      justify-between-center
      user-select-none
    "
  >
    <b-card
      :title="carTitle"
      class="mt-5 shadow mb-3 rounded"
      header-tag="header"
      style="background-color: #ffffff; max-width: 100em"
      align="center"
    >
      <b-img
        style="width: 250px; height: 10rem"
        :src="carImage"
        alt="Fluid-grow image"
      ></b-img>
      <b-card-text class="mt-4 mb-5">{{ cardetails }}</b-card-text>
      <b-button
        style="background-color: #1f2a48"
        variant="outline-light"
        pill
        class="
          shadow-lg
          border-none
          position-absolute
          bottom-0
          start-0
          ms-5
          mb-3
          mr-2
          button-center
        "
        v-b-modal="'modal-prevent-closing-' + cardId"
        @click="$emit('deleteCard')"
        v-if="price != null"
      >
        delete
      </b-button>
      <b-button
        style="background-color: #1f2a48"
        variant="outline-light"
        pill
        class="
          shadow-lg
          border-none
          position-absolute
          bottom-0
          translate-middle
        "
        @click="$emit('CarInfo', cardId)"
        v-if="price != null"
      >
        Info
      </b-button>
      <b-button
        style="background-color: #1f2a48"
        variant="outline-light"
        pill
        class="
          shadow-lg
          border-none
          position-absolute
          bottom-0
          ms-1
          mb-3
          button-center
        "
        disabled
        v-else
      >
        available soon...
      </b-button>
      <b-button
        variant="outline-light"
        pill
        style="background-color: #1f2a48"
        v-b-modal.modal-prevent-closing
        class="shadow-lg border-none position-absolute bottom-0 end-0 mb-3 me-2"
        v-b-modal="'modal-prevent-closing' + cardId"
        @click="$emit('editCard')"
        v-if="price != null"
      >
        edit
      </b-button>
    </b-card>
  </b-col> -->

  <v-col cols="3">
    <v-card max-width="250">
      <v-img height="250" :src="carImage"></v-img>

      <v-card-title>{{ carTitle }}</v-card-title>

      <v-card-text>
        <div class="my-4 text-subtitle-1">₹ • {{ price }}</div>

        <div>
          {{ cardetails }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2" 
          text
          class="pa-3"
          @click="$emit('deleteCard')"
          v-if="price != null"
        >
          Delete
        </v-btn>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="$emit('CarInfo', cardId)"
          v-if="price != null"
          class="pa-3"
        >
          Info
        </v-btn>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="$emit('editCard')"
          v-if="price != null"
          class="pa-3"
        >
          Edit
        </v-btn>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="$emit('editCard')"
          class="pa-3"
          disabled
          v-else
        >
          Avilable Soon
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<style>
.button-center {
  transform: translateX(-50%);
}
</style>

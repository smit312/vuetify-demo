<script>
export default {
  name: "GalleryCard",
  props: ["cardId", "carTitle", "carImage", "cardetails", "price"],
};
</script>

<template>
  <v-card class="gallery_card">
    <v-img sizes="250" class="ma-3" :src="carImage"></v-img>
    <v-card-title>{{ carTitle }}</v-card-title>
    <v-card-text>
      <div class="my-4 text-subtitle-1">₹ • {{ price }}</div>
      <div class="mb-3">
        {{ cardetails }}
      </div>
    </v-card-text>
    <!-- <div> -->
    <v-card-actions class="card_actions mt-2">
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="$emit('CarInfo', cardId)"
        v-if="price != null"
      >
        Info
      </v-btn>
      <v-btn color="deep-purple lighten-2" text v-else disabled>
        Avilable Soon
      </v-btn>

      <v-btn
        color="deep-purple lighten-2"
        text
        @click="$emit('editCard')"
        v-if="price != null"
      >
        Edit
      </v-btn>

      <v-btn
        color="deep-purple lighten-2"
        text
        @click="$emit('deleteCard')"
        v-if="price != null"
      >
        Delete
      </v-btn>
    </v-card-actions>
    <!-- </div> -->
  </v-card>
</template>
<style>
.gallery_card {
  padding-bottom: 50px;
}
.card_actions {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>

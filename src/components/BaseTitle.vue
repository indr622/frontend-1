<template>
  <div>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ subtitle }} </v-card-subtitle>
  </div>
</template>

<script>
export default {
  name: "BaseTitle",
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },

    subtitle: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>
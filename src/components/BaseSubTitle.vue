<template>
  <v-card-subtitle>{{ title }}</v-card-subtitle>
</template>

<script>
export default {
  name: "BaseSubTitle",
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>
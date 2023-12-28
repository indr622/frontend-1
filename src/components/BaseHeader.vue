<template>
  <v-container :fluid="isReportPage">
    <v-row no-gutters>
      <v-col cols="12" xs="12" sm="12" md="12" class="mb-2">
        <h3 color="grey darken-4">
          <v-icon large color="grey darken-4">
            <slot name="icon" />
          </v-icon>
          <slot name="name" />
        </h3>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col xs="12" sm="6" md="6" lg="6">
        <slot name="breadcrumbs" />
      </v-col>
      <v-col xs="12" sm="6" md="6" lg="6">
        <slot name="button" />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" xs="12" sm="12" md="12">
        <slot name="desc" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BaseHeader",
  computed: {
    isReportPage() {
      return true;
    },
  },
};
</script>
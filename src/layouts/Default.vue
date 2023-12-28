<template>
     <div>
          <v-app-bar app elevation="0" color="#fff">
               <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
               <v-toolbar-title></v-toolbar-title>
               <v-spacer></v-spacer>
          </v-app-bar>
          <v-navigation-drawer width="240" dark color="darkblue" app v-model="drawer">
               <v-list-item>
                    <v-list-item-content>
                         <v-list-item-title class="title">
                              <img src="@/assets/icon-logo.svg" class="mx-5" alt="Image Logo" width="150" />
                         </v-list-item-title>
                    </v-list-item-content>
               </v-list-item>

               <v-list-item-group color="#898F99" v-model="group">
                    <v-list-item-title class="ml-4 my-2" style="font-size: 14px">Menu</v-list-item-title>
                    <v-list-item to="/">
                         <v-list-item-icon>
                              <v-icon>mdi-tune-vertical</v-icon>
                         </v-list-item-icon>
                         <v-list-item-content>
                              <v-list-item-title style="font-size: 14px">TODO</v-list-item-title>
                         </v-list-item-content>
                    </v-list-item>

               </v-list-item-group>
          </v-navigation-drawer>
          <v-main class="mx-1 mr-4 mb-4">
               <slot />
          </v-main>
     </div>
</template>
<script>

export default {
     name: "Default",
     data: () => ({
          drawer: true,
          group: null,
     }),
};
</script>
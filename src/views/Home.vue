<template>
  <Default>
    <base-header>
      <template #icon> mdi-file</template>
      <template #name> Todo List </template>
    </base-header>

    <v-container>
      <v-data-table :headers="headers" :items="todos" :search="search" item-key="id" sort-by="name">
        <template v-slot:[`item.done`]="{ item }">
          <v-chip x-small :color="getColor(item.done)" dark>
            {{ item.done ? "Done" : "Not Done" }}
          </v-chip></template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon color="warning" class="mr-2" @click.stop="editItem(item)">
            mdi-pencil-box-outline
          </v-icon>
          <v-icon color="error" class="mr-2" @click.stop="deleteItem(item)">
            mdi-delete
          </v-icon>

        </template>
        <template v-slot:no-data> No data </template>
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search Data" outlined dense
              hide-details></v-text-field>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialogForm" max-width="450px" persistent>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" small elevation="4" color="primary" @click="loader = 'loading3'">
                  Create
                  <v-icon right dark>mdi-plus-circle </v-icon>
                </v-btn>
              </template>
              <v-form ref="form_data" v-model="form_valid" lazy-validation>
                <v-card class="rounded-lg">
                  <v-card-title class="mb-3">
                    <span class="headline">{{ form_title }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-text-field v-model="form_data.name" label="Todo Name" outlined dense :rules="rule_name" />
                    <v-switch v-model="form_data.done" label="Completed" />
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn small color="error darken-1" @click.stop="closedialogForm">Cancel
                      <v-icon right dark>mdi-close </v-icon>
                    </v-btn>
                    <v-btn small color="primary" class="ma-2 white--text" @click.stop="save" :loading="btnLoading"
                      :disabled="!form_valid || btnLoading">
                      Save
                      <v-icon right dark>mdi-content-save </v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-form>
            </v-dialog>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-container>

  </Default>
</template>

<script>
import Default from '@/layouts/Default.vue'
import BaseHeader from '@/components/BaseHeader.vue'
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Home',
  data: () => ({
    datatableLoading: false,
    form_valid: true,
    btnLoading: false,
    expanded: [],
    datatable: [],
    search: "",
    dialogForm: false,
    editedIndex: -1,
    headers: [
      { text: 'Todo', value: 'name' },
      { text: 'Status', value: 'done' },
      { text: 'Action', value: 'actions', sortable: false, width: 100 },
    ],
    rule_name: [(value) => !!value || "Name please fill in !!!"],
    form_data: {
      name: "",
      done: false,
    },
  }),

  methods: {
    ...mapActions(['getTodos', 'addTodo', 'removeTodo', 'editTodo']),
    deleteItem(item) {
      this.removeTodo({
        id: item.id
      });
    },

    editItem(item) {
      this.form_data = Object.assign({}, item);
      this.editedIndex = this.todos.indexOf(item);
      this.dialogForm = true;
    },
    save() {
      if (this.$refs.form_data.validate()) {
        this.btnLoading = true;
        if (this.editedIndex > -1) {
          this.editTodo(this.form_data, this.form_data.uid);
          this.closedialogForm();
        } else {
          this.addTodo(this.form_data);
          this.closedialogForm();
        }
      }
    },
    closedialogForm() {
      this.form_data.name = "";
      this.form_data.done = false;
      this.$refs.form_data.reset();
      this.dialogForm = false;
      this.btnLoading = false;
    },

    getColor(done) {
      if (done == 1) return "success";
      return "error";
    },

  },
  components: {
    Default,
    BaseHeader,
  },
  computed: {
    ...mapGetters(['allTodos']),
    todos() {
      return this.allTodos;
    },

    form_title() {
      return this.editedIndex === -1 ? "Add Todo" : "Edit Todo";
    },
  },
}
</script>

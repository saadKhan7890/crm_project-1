<template>
  <div>
    <v-breadcrumbs :items="bread">
      <template v-slot:divider>
        <v-icon>mdi-forward</v-icon>
      </template></v-breadcrumbs
    >
<v-row no-gutters  class="pa-10 rounded elevation-10">
<v-col
cols="12"
sm="12"
>
<v-form
ref="form"
v-model="loading"
lazy-validation
>

<v-row>
<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-text-field
    v-model="form.name"
    :rules="[rules.required]"
    :error-messages="errors.name"
    label="Name"
  ></v-text-field>
</v-col>

<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
  <v-text-field
    v-model="form.title"
    :rules="[rules.required]"
    :error-messages="errors.name"
    label="Title"
  ></v-text-field>
</v-col>
<v-col
  cols="12"
  sm="12"
  class="pb-0"
>
<v-select
    v-model="form.permissions"
    :items="permissions"
    label="Permissions"
    item-text="title"
    item-value="id"
    return-object
    multiple
    chips
    hint="Select All permissions you want to sync with this role"
    persistent-hint
></v-select>
</v-col>
 <v-col
  cols="12"
  sm="12"
  class="pb-0"
>
<v-btn
    color="secondary"
    elevation="1"
    large
    raised
    @click="addpermission"
    :loading="btnloading"
    :disabled="btnloading"
  >{{form.id>0?'Update':'Add'}}</v-btn>
</v-col>

</v-row>

</v-form>
</v-col>
</v-row>
  </div>
</template>

<script>
import rolesservice from "@services/auth/roles";
import permissionservice from "@services/auth/permission";
export default {
  name: "auth.roles.add",
  async mounted(){
    this.permissions = await permissionservice.getlist('').then(e=>e.data)
    if(this.$route.params.id){
        var res = await rolesservice.get(this.form.id)
        let permissions_to_select = res.permissions.map(e=>{
            return {title: e.permission.title, id:e.permission_id}
        });

        this.form = {
            name: res.name,
            title: res.title,
            id: this.$route.params.id,
            permissions: permissions_to_select,
        }
        this.bread.push({
          text: "Edit",
          to: { name: "auth.roles.edit", params: {id: this.$route.params.id} },
          disabled: false,
          exact: true,
        })
    }else{
        this.bread.push({
          text: "Add",
          to: { name: "auth.roles.add"},
          disabled: false,
          exact: true,
        })
    }
  },
  methods: {
    resetError(){
        this.errors = {
          name:[],
          title: [],
          permissions: [],
      }
    },
    addpermission: async function () {
        this.resetError()
      if (this.$refs.form.validate()) {
        this.btnloading = true;
        var formdata = new FormData();
        formdata.append("name", this.form.name);
        formdata.append("title", this.form.title);
        for(let i = 0; i < this.form.permissions.length; i++){
            formdata.append("permissions["+i+"]", this.form.permissions[i].id);
        }
        this.btnloading = false;
        if(this.form.id>0){
            var res = await rolesservice.update(formdata, this.form.id)
        }else{
            var res = await rolesservice.create(formdata)
        }
        if(!res.status){
            if(res.data.name){
                this.errors.name = res.data.name
            }
            if(res.data.title){
                this.errors.title = res.data.title
            }
            //errors here
        }else{
            //suuccess here
            this.$router.push({ name: "auth.roles.listing" });
        }
      }
    },
  },
  computed: {
    user() {
        return this.$store.getters.loggedInUser;
    },
  },
  data() {
    return {
      form:{
          id: (this.$route.params.id?this.$route.params.id:0),
          name: '',
          title: '',
          permissions: [],
      },
      errors: {
          name:[],
          title: [],
          permissions: [],
      },
      permissions: [],
      bread: [
        {
          text: "Dashboard",
          to: { name: "auth.dashboard" },
          disabled: false,
          exact: true,
        },
        {
          text: "Roles",
          to: { name: "auth.roles.listing" },
          disabled: false,
          exact: true,
        }
      ],
      loading: false,
      btnloading: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
};
</script>

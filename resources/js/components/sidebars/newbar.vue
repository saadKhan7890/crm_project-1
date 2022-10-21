<template>
    <div v-if="loggedIn">
        <v-app-bar :elevate-on-scroll="true" fixed color="primary" dense dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>CRM</v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn> -->

            <!-- <v-btn v-if="user.role_id!=2" plain @click="overlay = !overlay">
                <v-icon>mdi-magnify</v-icon>
                Serial Number Lookup
            </v-btn> -->
            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="(item, itemKey) in items" :key="itemKey" link :to="{ name: item.link }"
                        v-show="permissions.indexOf(item.permission_id) >= 0">
                        <v-list-item-title>{{item.title}}</v-list-item-title>
                    </v-list-item>
                    <v-btn  @click="logoutauthparent" block color="primary">
                        Logout
                    </v-btn>
                </v-list>
            </v-menu>
        </v-app-bar>
        <sidemenu :drawer="drawer" @updateDrawer="updateDrawer" />
        <v-overlay :opacity="opacity" :value="overlay">
            <v-container>
                <v-text-field v-model="serialNumber" label="Seral Number"></v-text-field>
                <v-btn class="white--text" color="danger" @click="overlay = false">
                    Close
                </v-btn>
                <v-btn :loading="lookupSerialSearch" :disabled="lookupSerialSearch" class="white--text" color="teal" @click="requestLookup">
                    Search Now
                </v-btn>
            </v-container>
        </v-overlay>
    </div>
</template>
<script>
import sidemenu from './sidemenu.vue';
import otherrequestservice from "@services/auth/otherrequests";

export default {
    name: "sidebar",
    props: ["showsidebar"],
    components: {
        sidemenu,
    },
    data: () => ({
        drawer: false,
        serialNumber: '',
        lookupSerialSearch: false,
        overlay: false,
        opacity: 0.7,
        collapseOnScroll: true,
        items: [
            // { title: '+ Permission', link: 'auth.permissions.add', permission_id: 62 },
            // { title: '+ Role', link: 'auth.roles.add', permission_id: 57 },
            // { title: '+ User', link: 'auth.users.add', permission_id: 2 },
            // { title: '+ Brand', link: 'auth.brands.add', permission_id: 119 },
            // { title: '+ Email Template', link: 'auth.emailtemplates.add', permission_id: 150 },
            // { title: '+ Item Type', link: 'auth.itemtypes.add', permission_id: 125 },
            // { title: '+ Common Issue', link: 'auth.commonissues.add', permission_id: 130 },
            // { title: '+ Product', link: 'auth.products.add', permission_id: 135 },
            // { title: '+ Ticket', link: 'auth.tickets.add', permission_id: 145 },
        ],
    }),
    methods: {
        updateDrawer(drawer) {
            this.drawer = drawer
        },
        async requestLookup(){
            if(this.serialNumber){
                // this.lookupSerialSearch = true
                // const formData = new FormData();
                let routeData = this.$router.resolve({name: 'auth.lookup', query: {serial: this.serialNumber}});
                window.open(routeData.href, '_blank');
                this.serialNumber = '';
                // formData.append('txtserialnum', this.serialNumber);
                // const res = await otherrequestservice.post('lookup', formData).then(e=>e.data)
                // this.lookupSerialSearch = false
            }
        },
        logoutauthparent() {
            this.$store.commit("setLoginStatus", false);
            this.$store.commit("setAuthToken", "");
            this.$store.commit("setloggedInUser", {});
            this.$router.push({ name: "auth.login" });
        },
    },
    computed: {
        user() {
            return this.$store.getters.loggedInUser;
        },
        loggedIn() {
            return this.$store.getters.loggedIn;
        },
        permissions() {
            return this.$store.getters.getPermissions;
        },
    },
};
</script>

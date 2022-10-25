<template>
    <div v-if="loggedIn">
        <v-app-bar :elevate-on-scroll="true" fixed color="primary" dense dark prominent absolute>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>AU Account</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn depressed color="primary">
                Paypal
            </v-btn>
            <v-btn depressed color="primary">
                US Mercury
            </v-btn>
            <v-btn depressed color="primary">
                UBL AU
            </v-btn>
            <v-btn depressed color="primary">
                Others
            </v-btn>
            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, itemKey) in items" :key="itemKey" @click="logoutauthparent(item.action)">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <template v-slot:extension>
                <div class="SearchAndButton">
                    <div class="d-flex flex-column float-end">
                        <v-row class="pr-2">
                        <v-responsive max-width="260">
                            <v-text-field dense flat hide-details rounded solo-inverted placeholder="Search"  prepend-icon="cmdi-magnify"></v-text-field>
                        </v-responsive>
                        </v-row>
                    </div>
                    <br/>
                    <div class="d-flex flex-column mb-12">
                        <v-row align="center" justify="center">
                            <v-btn depressed color="primary">
                                Revenue
                            </v-btn>
                            <v-btn depressed color="primary">
                                Suppliers Usage
                            </v-btn>
                            <v-btn depressed color="primary">
                                Datacenters
                            </v-btn>
                            <v-btn depressed color="primary">
                                Comissions
                            </v-btn>
                            <v-btn depressed color="primary">
                                P&L
                            </v-btn>
                        </v-row>
                    </div>
                </div>
            </template>
        </v-app-bar>
        <sidemenu :drawer="drawer" @updateDrawer="updateDrawer" />
        <rightsidemenu class="rightsidemenu"/>

    </div>
</template>
<script>
import sidemenu from './sidemenu.vue';
import rightsidemenu from './rightsidemenu.vue';
import otherrequestservice from "@services/auth/otherrequests";

export default {
    name: "sidebar",
    props: ["showsidebar"],
    components: {
        sidemenu,
        rightsidemenu
    },
    data: () => ({
        drawer: false,
        serialNumber: '',
        lookupSerialSearch: false,
        overlay: false,
        opacity: 0.7,
        collapseOnScroll: true,
        extended: true,
        items: [
            { title: 'Logout', icon: "mdi-logout", action: "logout" },
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

        async requestLookup() {
            if (this.serialNumber) {
                // this.lookupSerialSearch = true
                // const formData = new FormData();
                let routeData = this.$router.resolve({ name: 'auth.lookup', query: { serial: this.serialNumber } });
                window.open(routeData.href, '_blank');
                this.serialNumber = '';
                // formData.append('txtserialnum', this.serialNumber);
                // const res = await otherrequestservice.post('lookup', formData).then(e=>e.data)
                // this.lookupSerialSearch = false
            }
        },
        logoutauthparent(action) {
            if (action === "logout") {
                this.$store.commit("setLoginStatus", false);
                this.$store.commit("setAuthToken", "");
                this.$store.commit("setloggedInUser", {});
                this.$router.push({ name: "auth.login" });
            }
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
<style>

</style>

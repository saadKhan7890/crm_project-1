<template>
    <v-navigation-drawer @input="updateDrawer" v-model="drawer" absolute temporary>
        <v-list dense nav>
            <v-list-item class="px-2" link:to="{ name: 'auth.profile' }" >
                <v-list-item-avatar>
                    <v-img :src="user.image_url"></v-img>
                </v-list-item-avatar>
                <v-list-item-title>{{ user.name }}</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item v-for="item in items" :key="item.title" link :to="{ name: item.link }" v-show="item.permission_id?permissions.indexOf(item.permission_id) >= 0:true">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item class="px-2">
                <v-switch
                    @change="toggleDarkTheme()"
                    label="Theme Dark"
                    color="green"
                    v-model="isNightMode"
                ></v-switch>
            </v-list-item>
        </v-list>
        <template v-slot:append>

        </template>
    </v-navigation-drawer>
</template>
<script>
export default {
    data: () => ({
        isNightMode: false,
        items: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard', link: 'auth.dashboard' },
            { title: 'Customers', icon: 'mdi-alpha-p', link: 'auth.dashboard' , permission_id: 0 },
            { title: 'Suppliers', icon: 'mdi-shape-circle-plus', link: 'auth.dashboard' , permission_id: 0 },
            { title: 'Datacenters', icon: 'mdi-account-multiple-plus-outline', link: 'auth.dashboard' , permission_id: 0 },
            { title: 'Sucbscriptions', icon: 'mdi-watermark', link: 'auth.dashboard' , permission_id: 0 },
            { title: 'Employees', icon: 'mdi-ticket', link: 'auth.dashboard' , permission_id: 0 },
            { title: 'Switches', icon: 'mdi-sitemap', link: 'auth.dashboard' , permission_id: 0 },
            { title: 'Overheads', icon: 'mdi-alert-circle-outline', link: 'auth.dashboard' , permission_id: 0 },
            { title: 'Comissions', icon: 'mdi-view-dashboard', link: 'auth.dashboard' , permission_id: 0 },
            { title: 'Debts/Loans', icon: 'mdi-account-multiple-plus-outline', link: 'auth.dashboard' , permission_id: 0 },
            { title: 'Wallets', icon: 'mdi-ticket', link: 'auth.dashboard' , permission_id: 0 },
            // { title: 'Permissions', icon: 'mdi-alpha-p', link: 'auth.permissions.listing', permission_id: 61 },
            // { title: 'Roles', icon: 'mdi-shape-circle-plus', link: 'auth.roles.listing', permission_id: 56 },
            // { title: 'Users', icon: 'mdi-account-multiple-plus-outline', link: 'auth.users.listing', permission_id: 1 },
            // { title: 'Brands', icon: 'mdi-watermark', link: 'auth.brands.listing', permission_id: 118 },
            // { title: 'Email Template', icon: 'mdi-ticket', link: 'auth.emailtemplates.listing', permission_id: 148 },
            // { title: 'Item Types', icon: 'mdi-sitemap', link: 'auth.itemtypes.listing', permission_id: 123 },
            // { title: 'Common Issues', icon: 'mdi-alert-circle-outline', link: 'auth.commonissues.listing', permission_id: 128 },
            // { title: 'Products', icon: 'mdi-folder-star-multiple', link: 'auth.products.listing', permission_id: 133 },
            // { title: 'Tickets', icon: 'mdi-ticket', link: 'auth.tickets.listing', permission_id: 143 },
            // { title: 'Bulk Upload Products', icon: 'mdi-file-upload', link: 'auth.products.bulk-upload', permission_id: 138 },
        ],
    }),
    mounted(){
        var isDarkTheme = localStorage.getItem('is_theme_dark')
        if(isDarkTheme==='true'){
            this.isNightMode = true
        }else{
            this.isNightMode = false
        }
    },
    props: {
        drawer: {
            type: Boolean,
            default: false,
        }
    },
    watch: {
        group() {
            //   this.drawer = false
        }
    },
    methods: {
        async toggleDarkTheme(){
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            this.isNightMode = this.$vuetify.theme.dark;
            await this.$nextTick()
            localStorage.setItem('is_theme_dark', this.$vuetify.theme.dark===false?'false':'true')
        },
        updateDrawer(drawer) {
            this.$emit('updateDrawer', drawer)
        },
        // logoutauthparent() {
        //     this.$store.commit("setLoginStatus", false);
        //     this.$store.commit("setAuthToken", "");
        //     this.$store.commit("setloggedInUser", {});
        //     this.$router.push({ name: "auth.login" });
        // },
    },
    computed: {
        themeMode(){
            return this.$vuetify.theme.dark
        },
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
}
</script>

<template>
	<div v-if="loggedIn">
		<v-app-bar class="responsive_top" app color="dark" dark>
			<!-- <div class="d-flex align-center"></div> -->

			<!-- <v-spacer></v-spacer> -->
			<v-btn
				:to="{ name: 'auth.notifications' }"
				text
			>
				<v-badge
					:content="user.notification_count"
					:value="user.notification_count"
					color="green"
					overlap
				>
					<v-icon> mdi-bell-outline </v-icon>
				</v-badge>
			</v-btn>
			<v-btn :to="{ name: 'auth.dashboard' }" text>
				<!-- <span class="mr-2">Dashboard</span> -->
				<v-icon>mdi-home</v-icon>
			</v-btn>
			<v-btn @click="logoutauthparent" text>
				<span class="mr-2">Logout</span>
				<!-- <v-icon>mdi-open-in-new</v-icon> -->
			</v-btn>
		</v-app-bar>

		<v-app-bar class="main_top" app color="primary" dark>
			<div class="d-flex align-center"></div>
			<v-spacer></v-spacer>

			<v-btn :to="{ name: 'auth.notifications' }" text>
				<v-badge
					:content="user.notification_count"
					:value="user.notification_count"
					color="green"
					overlap
				>
					<v-icon> mdi-bell-outline </v-icon>
				</v-badge>
			</v-btn>
			<v-btn :to="{ name: 'auth.dashboard' }" text>
				<span class="mr-2">Dashboard</span>
				<v-icon>mdi-home</v-icon>
			</v-btn>
			<v-btn @click="logoutauthparent" text>
				<span class="mr-2">Logout</span>
				<v-icon>mdi-account-key</v-icon>
			</v-btn>
		</v-app-bar>

		<v-hover v-slot="{ hover }" :class="{ res_show: !show }">
			<!-- <v-hover v-slot="{ hover }" v-if="show"> -->
			<v-navigation-drawer
				v-model="drawer"
				permanent
				absolute
				class=""
				v-if="!showsidebar"
				dark
				:color="'primary'"
				style=""
			>
				<v-system-bar></v-system-bar>
				<v-system-bar
					style="margin-top: 18px !important"
				></v-system-bar>
				<v-list-item
					@click="showNav"
					class="px-2 pt-3"
					link
					:to="{ name: 'auth.profile' }"
				>
					<v-list-item-avatar>
						<v-img :src="user.image_url"></v-img>
					</v-list-item-avatar>

					<v-list-item-title>{{ user.name }}</v-list-item-title>

					<!-- <v-btn icon @click.stop="mini = !mini">
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn> -->
				</v-list-item>

				<v-divider></v-divider>

				<v-list dense>
					<v-list-item
						@click="showNav"
						class="pa-0"
						link
						:to="{
							name: 'auth.permissions.listing',
							// permissions.indexOf(61) >= 0
							// 	? 'auth.permissions.listing'
							// 	: 'auth.dashboard',
						}"
					>
						<v-menu
							open-on-hover
							offset-x
							style="max-width: 600px"
							:close-on-content-click="false"
						>
							<template v-slot:activator="{ on, attrs }">
								<v-list-item-icon
									color="primary"
									dark
									class="d-block"
									style="width: 100%; text-align: center"
									v-bind="attrs"
									v-on="on"
								>
									<v-icon v-text="'mdi-alpha-p'"></v-icon>
								</v-list-item-icon>

								<v-list-item-content>
									<v-list-item-title
										>Permission</v-list-item-title
									>
								</v-list-item-content>
							</template>

							<!-- <v-list v-if="permissions.indexOf(62) >= 0"> -->
							<v-list>
								<v-list-item
									exact
									link
									:to="{ name: 'auth.permissions.add' }"
								>
									<v-list-item-title
										>Add Permission</v-list-item-title
									>
								</v-list-item>
							</v-list>
						</v-menu>
					</v-list-item>

					<v-list-item
						@click="showNav"
						class="pa-0"
						link
						:to="{
							name: 'auth.roles.listing',
							// permissions.indexOf(56) >= 0
							// 	? 'auth.roles.listing'
							// 	: 'auth.dashboard',
						}"
					>
						<v-menu
							open-on-hover
							offset-x
							style="max-width: 600px"
							:close-on-content-click="false"
						>
							<template v-slot:activator="{ on, attrs }">
								<v-list-item-icon
									color="primary"
									dark
									class="d-block"
									style="width: 100%; text-align: center"
									v-bind="attrs"
									v-on="on"
								>
									<v-icon
										v-text="'mdi-shape-circle-plus'"
									></v-icon>
								</v-list-item-icon>

								<v-list-item-content>
									<v-list-item-title>Role</v-list-item-title>
								</v-list-item-content>
							</template>
							<!-- <v-list v-if="permissions.indexOf(57) >= 0"> -->
							<v-list>
								<v-list-item
									exact
									link
									:to="{ name: 'auth.roles.add' }"
								>
									<v-list-item-title
										>Add Role</v-list-item-title
									>
								</v-list-item>
							</v-list>
						</v-menu>
					</v-list-item>

					<v-list-item
						@click="showNav"
						class="pa-0"
						link
						:to="{
							name: 'auth.users.listing',
							// permissions.indexOf(1) >= 0
							// 	? 'auth.users.listing'
							// 	: 'auth.dashboard',
						}"
					>
						<v-menu
							open-on-hover
							offset-x
							style="max-width: 600px"
							:close-on-content-click="false"
						>
							<template v-slot:activator="{ on, attrs }">
								<v-list-item-icon
									color="primary"
									dark
									class="d-block"
									style="width: 100%; text-align: center"
									v-bind="attrs"
									v-on="on"
								>
									<v-icon
										v-text="
											'mdi-account-multiple-plus-outline'
										"
									></v-icon>
								</v-list-item-icon>

								<v-list-item-content>
									<v-list-item-title>Users</v-list-item-title>
								</v-list-item-content>
							</template>
							<!-- <v-list v-if="permissions.indexOf(2) >= 0"> -->
							<v-list>
								<v-list-item
									exact
									link
									:to="{ name: 'auth.users.add' }"
								>
									<v-list-item-title
										>Add User</v-list-item-title
									>
								</v-list-item>
							</v-list>
						</v-menu>
					</v-list-item>
				</v-list>
			</v-navigation-drawer>
		</v-hover>
	</div>
</template>
<script>
import Menu from './menu.vue';
export default {
	name: "sidebar",
	components: { Menu },
	props: ["showsidebar"],
	data: () => ({
		show: false,
		isActive: false,
		drawer: false,
		mini: false,
		addShortCuts: [
			{
				name: "Role",
				to: "auth.roles.add",
				permission_id: 57,
			},
			{
				name: "Permission",
				to: "auth.permissions.add",
				permission_id: 62,
			},
			{
				name: "User",
				to: "auth.users.add",
				permission_id: 2,
			},
		],
	}),
	methods: {
		logoutauthparent() {
			this.$store.commit("setLoginStatus", false);
			this.$store.commit("setAuthToken", "");
			this.$store.commit("setloggedInUser", {});
			this.$router.push({ name: "auth.login" });
		}
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

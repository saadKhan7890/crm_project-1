<template>
	<v-row class="pr-5 pl-5">
		<v-col cols="6" v-if="permissions.indexOf(139) >= 0">
			<v-btn block class="white--text" color="cyan" @click="downloadExcel('product')">
				Export Products
			</v-btn>
		</v-col>
		<v-col cols="6" v-if="permissions.indexOf(140) >= 0">
			<v-btn block class="white--text" color="purple" @click="downloadExcel('brand')">
				Export Brands
			</v-btn>
		</v-col>
		<v-col cols="6" v-if="permissions.indexOf(141) >= 0">
			<v-btn block class="white--text" color="orange" @click="downloadExcel('item')">
				Export Item Types
			</v-btn>
		</v-col>
		<v-col cols="6" v-if="permissions.indexOf(142) >= 0">
			<v-btn block class="white--text" color="pink" @click="downloadExcel('user')">
				Export Users
			</v-btn>
		</v-col>

		<v-snackbar v-model="snack">
			ERROR!!
			<template v-slot:action="{ attrs }">
				<v-btn text small color="#004ED0" v-bind="attrs" @click="snack = false">
					Close
				</v-btn>
			</template>
		</v-snackbar>
	</v-row>
</template>
<script>
import exportService from '@/services/auth/exportExcel'

export default {
	data() {
		return {
			snack: false
		}
	},
	computed: {
		permissions() {
			return this.$store.getters.getPermissions;
		},
	},
	methods: {
		async downloadExcel(type) {
			const res = await exportService.download(type)
			if (res.success) window.location.href = res['file-link']
			else {
				this.snack = true
			}
		},
	}
}
</script>
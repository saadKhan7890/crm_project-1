<template>
	<div>
		<v-row no-gutters class="pa-10 rounded elevation-10">
			<v-col cols="12" sm="12">
				<v-form ref="form" v-model="loading" lazy-validation>
					<v-row>
						<v-col cols="12" sm="12" class="pb-0">
							<v-text-field
								v-model="name"
								:rules="[rules.required]"
								:error-messages="errors.name"
								label="Full Name"
							></v-text-field>
						</v-col>

						<v-col cols="12" sm="12" class="pb-0">
							<v-text-field
								v-model="email"
								:rules="[rules.required]"
								:error-messages="errors.email"
								label="Email"
							></v-text-field>
						</v-col>

						<v-col cols="12" sm="12" class="pb-0">
							<v-text-field
								v-model="password"
								:error-messages="errors.password"
								label="Password"
								type="password"
								autocomplete="new-password"
							></v-text-field>
						</v-col>

						<v-col cols="12" sm="12" class="pb-0">
							<v-text-field
								v-model="address"
								:error-messages="errors.address"
								label="Address"
							></v-text-field>
						</v-col>

						<v-col cols="6" sm="6" class="pb-0">
							<v-text-field
								v-model="city"
								:error-messages="errors.city"
								label="City"
							></v-text-field>
						</v-col>

						<v-col cols="6" sm="6" class="pb-0">
							<v-text-field
								v-model="zip_code"
								:error-messages="errors.zip_code"
								label="Zip/Postal Code"
							></v-text-field>
						</v-col>

						<v-col cols="5" sm="5" class="pb-0">
							<v-text-field
								v-model="latitude"
								:error-messages="errors.latitude"
								label="Latitude"
							></v-text-field>
						</v-col>

						<v-col cols="5" sm="5" class="pb-0">
							<v-text-field
								v-model="longitude"
								:error-messages="errors.longitude"
								label="Longitude"
							></v-text-field>
						</v-col>

						<v-col cols="2" sm="2" class="pb-0">
							<v-btn
								color="primary"
								elevation="1"
								large
								raised
								@click="trackLocation"
								>Track Location</v-btn
							>
						</v-col>

						<v-col cols="12" sm="12" class="pb-0">
							<v-file-input
								show-size
								v-model="image"
								:error-messages="errors.file"
								accept="image/png, image/jpeg, image/bmp"
								label="Title Image"
								:rules="[rules.required]"
								truncate-length="15"
							></v-file-input>
							<v-img
								:lazy-src="imageurl"
								max-height="100"
								max-width="150"
								contain
								:src="imageurl"
							></v-img>
						</v-col>
						<v-col cols="12" sm="12" class="pb-0">
							<v-btn
								color="secondary"
								elevation="1"
								large
								raised
								@click="addbrand"
								:loading="btnloading"
								:disabled="btnloading"
								>Save</v-btn
							>
						</v-col>
					</v-row>
				</v-form>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import loginservice from "@services/auth/login";
export default {
	name: "auth.company.edit",
	mounted() {
		this.startProfile();
	},
	methods: {
		async trackLocation(){

		},
		async startProfile() {
			this.id = this.$route.params.id;
			var res = await loginservice.me();
			this.name = res.name;
			this.email = res.email;
			this.address = res.address;
			this.city = res.city;
			this.zip_code = res.zip_code;
			this.latitude = res.latitude;
			this.longitude = res.longitude;
			this.password = "";
			this.imageurl = res.image_url;
		},
		resetError() {
			this.errors = {
				name: [],
				password: [],
				email: [],
				file: [],
				address: [],
				city: [],
				zip_code: [],
				latitude: [],
				longitude: [],
			};
		},
		addbrand: async function () {
			this.resetError();
			if (this.$refs.form.validate()) {
				this.btnloading = true;
				var formdata = new FormData();
				formdata.append("name", this.name);
				formdata.append("email", this.email);
				formdata.append("address", this.address);
				formdata.append("city", this.city);
				formdata.append("zip_code", this.zip_code);
				formdata.append("latitude", this.latitude);
				formdata.append("longitude", this.longitude);
				if (this.password) {
					formdata.append("password", this.password);
				}
				if (this.image.size) {
					formdata.append("file", this.image);
				}
				this.btnloading = false;
				var res = await loginservice.updateProfile(formdata, this.id);
				if (!res.status) {
					if (res.data.name) {
						this.errors.name = res.data.name;
					}
					if (res.data.email) {
						this.errors.email = res.data.email;
					}
					if (res.data.password) {
						this.errors.password = res.data.password;
					}
					if (res.data.file) {
						this.errors.file = res.data.file;
					}
					if (res.data.address) {
						this.errors.address = res.data.address;
					}
					if (res.data.city) {
						this.errors.city = res.data.city;
					}
					if (res.data.zip_code) {
						this.errors.zip_code = res.data.zip_code;
					}
					if (res.data.latitude) {
						this.errors.latitude = res.data.latitude;
					}
					if (res.data.longitude) {
						this.errors.longitude = res.data.longitude;
					}
					//errors here
				} else {
					//suuccess here
					if (this.image.size) {
						var fileData = new FormData();
						fileData.append("ref_id", res.data.id);
						fileData.append("table_name", "users");
						fileData.append("type", "1");
						fileData.append("attachements[0]", this.image);
						// await fileservice.create(fileData);
					}
					this.startProfile();
				}
			}
		},
	},
	data() {
		return {
			name: "",
			id: 0,
			email: "",
			password: "",
			address: '',
			city: '',
			zip_code: '',
			latitude: '',
			longitude: '',
			imageurl: "",
			errors: {
				name: [],
				email: [],
				password: [],
				file: [],
				address: [],
				city: [],
				zip_code: [],
				latitude: [],
				longitude: [],
			},
			image: {},
			loading: false,
			btnloading: false,
			rules: {
				required: (value) => !!value || "Required.",
			},
		};
	},
};
</script>

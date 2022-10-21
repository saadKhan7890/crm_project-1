<template>
    <div>
        <!-- <v-breadcrumbs :items="bread">
            <template v-slot:divider>
                <v-icon>mdi-forward</v-icon>
            </template>
        </v-breadcrumbs> -->
        <h1 class="heading_one">Ticket Form</h1>
        <v-row no-gutters class="pa-10 rounded elevation-10">
            <v-col cols="12" sm="12">
                <v-form ref="form" v-model="loading" lazy-validation>
                    <v-row>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.first_name" :rules="[rules.required]"
                                :error-messages="errors.first_name" label="First Name"></v-text-field>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.last_name" :error-messages="errors.last_name" label="Last Name">
                            </v-text-field>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.email" :rules="[rules.required]" :error-messages="errors.email"
                                label="Email"></v-text-field>
                        </v-col>
                        <!-- <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.password" :rules="[rules.required]" type="password" :error-messages="errors.password" label="Password"></v-text-field>
                        </v-col> -->
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.phone" :rules="[rules.required]" :error-messages="errors.phone" type="number" label="Phone#"></v-text-field>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-select :items="brands" item-text="brand_name" item-value="id" label="Brands" required v-model="form.brand_id" :error-messages="errors.brand_id"></v-select>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-select :items="itemTypes" item-text="name" item-value="id" label="Item Type" required v-model="form.itme_type_id" :error-messages="errors.itme_type_id"></v-select>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-select :items="products" item-text="item_number" item-value="id" label="Products" required v-model="form.product_id" :error-messages="errors.product_id"></v-select>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.serial" :error-messages="errors.serial" label="Serial#" :rules="[rules.required]"></v-text-field>
                        </v-col>
                        <v-col cols="4" sm="4" class="pb-0">
                            <v-select :items="resolutions" item-text="name" item-value="id" label="Resolution" required v-model="form.resolution" :error-messages="errors.resolution" disabled></v-select>
                        </v-col>
                        <v-col cols="4" sm="4" class="pb-0">
                            <v-menu ref="purchase_date_ref" v-model="purchase_date_menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="form.purchase_date" label="Purchase date"
                                        prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker v-model="form.purchase_date" :error-messages="errors.purchase_date"
                                    no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="purchase_date_menu = false">
                                        Cancel
                                    </v-btn>
                                    <v-btn text color="primary" @click="$refs.purchase_date_ref.save(date)">
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="4" sm="4" class="pb-0">
                            <v-text-field v-model="form.zip_code_postal" :rules="[rules.required]" :error-messages="errors.zip_code_postal" required label="Zip Code / Postal">
                            </v-text-field>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-select :items="country" v-model="form.country" :rules="[rules.required]" :error-messages="errors.country" required label="Country"></v-select>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.city" :rules="[rules.required]" :error-messages="errors.city" required label="City"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" class="pb-0">
                            <v-text-field v-model="form.address" :rules="[rules.required]" :error-messages="errors.address" required label="Address#"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" class="pb-0">
                            <v-card class="mx-auto">
                                <h3 class="pa-5 font-weight-light">Select Issue</h3>
                                <v-divider></v-divider>
                                <v-card-text>
                                    <v-row no-gutters>
                                        <v-col cols="3" v-if="issues.length > 0">
                                            <v-list height="300" class="issues-list">
                                                <v-list-item-group color="primary" active-class="white"
                                                    v-model="form.issue">
                                                    <v-list-item v-for="issue in issues" :key="issue.id"
                                                        :value="issue.id" @click="loadChildList(issue, 1)">
                                                        <v-list-item-icon v-if="issue.children.length">
                                                            <v-icon v-text="'mdi-chevron-right'"></v-icon>
                                                        </v-list-item-icon>
                                                        <v-list-item-content>
                                                            <v-list-item-title v-text="issue.name"></v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list-item-group>
                                            </v-list>
                                        </v-col>

                                        <v-col cols="3" v-if="subIssues1.length > 0">
                                            <v-list height="300" class="issues-list">
                                                <v-list-item-group color="primary" active-class="white"
                                                    v-model="form.issue">
                                                    <v-list-item v-for="issue in subIssues1" :key="issue.id"
                                                        :value="issue.id" @click="loadChildList(issue, 2)">
                                                        <v-list-item-icon v-if="issue.children.length">
                                                            <v-icon v-text="'mdi-chevron-right'"></v-icon>
                                                        </v-list-item-icon>
                                                        <v-list-item-content>
                                                            <v-list-item-title v-text="issue.name"></v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list-item-group>
                                            </v-list>
                                        </v-col>

                                        <v-col cols="3" v-if="subIssues2.length > 0">
                                            <v-list height="300" class="issues-list">
                                                <v-list-item-group color="primary" active-class="white"
                                                    v-model="form.issue">
                                                    <v-list-item v-for="issue in subIssues2" :key="issue.id"
                                                        :value="issue.id" @click="loadChildList(issue, 3)">
                                                        <v-list-item-icon v-if="issue.children.length">
                                                            <v-icon v-text="'mdi-chevron-right'"></v-icon>
                                                        </v-list-item-icon>
                                                        <v-list-item-content>
                                                            <v-list-item-title v-text="issue.name"></v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list-item-group>
                                            </v-list>
                                        </v-col>

                                        <v-col cols="3" v-if="subIssues3.length > 0">
                                            <v-list height="300" class="issues-list">
                                                <v-list-item-group color="primary" active-class="white"
                                                    v-model="form.issue">
                                                    <v-list-item v-for="issue in subIssues3" :key="issue.id"
                                                        :value="issue.id">
                                                        <v-list-item-icon v-if="issue.children.length">
                                                            <v-icon v-text="'mdi-chevron-right'"></v-icon>
                                                        </v-list-item-icon>
                                                        <v-list-item-content>
                                                            <v-list-item-title v-text="issue.name"></v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list-item-group>
                                            </v-list>
                                        </v-col>


                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="12" class="pb-0">
                            <!-- <v-btn color="cyan" elevation="1" large raised @click="addpermission(0)"
								:loading="btnloading" :disabled="btnloading">Pending</v-btn> -->
                            <v-btn color="warning" elevation="1" large raised @click="addpermission(1)"
                                :loading="btnloading" :disabled="btnloading">Submit</v-btn>
                            <!-- <v-btn color="pink" elevation="1" large raised @click="addpermission(2)"
								:loading="btnloading" :disabled="btnloading">Closed</v-btn> -->
                        </v-col>

                    </v-row>

                </v-form>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import service from "@services/auth/default";
const getservice = new service('public-ticket-data');
const getProductservice = new service('product-service');
const mainservice = new service('tech-support-save');
export default {
    name: "guest.ticketSend",
    watch: {
        'form.brand_id': function () {
            this.getProducts()
        },
        'form.itme_type_id': function () {
            this.getProducts()
        },
    },
    async mounted() {
        await getservice.getlist('').then(e => (this.itemTypes = e.itemType, this.brands = e.brand, this.issues = e.commonIssue))
    },
    methods: {
        getCurrentSelectionParent(value) {
            this.form.issue = value[0];
        },
        async getProducts() {
            this.products = []
            if (this.form.brand_id && this.form.itme_type_id) {
                const brand_id = this.form.brand_id;
                const itme_type_id = this.form.itme_type_id;
                await getProductservice.getProductData(brand_id, itme_type_id).then(e => (this.products = e.data))
            }
        },
        resetError() {
            this.errors = {
                first_name: [],
                last_name: [],
                email: [],
                phone: [],
                brand_id: [],
                itme_type_id: [],
                product_id: [],
                serial: [],
                purchase_date: [],
                issue: [],
                resolution: [],
            }
        },
        addpermission: async function (status) {
            this.resetError()
            if (this.$refs.form.validate()) {
                this.btnloading = true;
                var formdata = new FormData();
                formdata.append("first_name", this.form.first_name);
                formdata.append("last_name", this.form.last_name);
                formdata.append("email", this.form.email);
                // formdata.append("password", this.form.password);
                formdata.append("phone", this.form.phone);
                formdata.append("brand_id", this.form.brand_id);
                formdata.append("itme_type_id", this.form.itme_type_id);
                formdata.append("product_id", this.form.product_id);
                formdata.append("serial", this.form.serial);
                formdata.append("purchase_date", this.form.purchase_date);
                formdata.append("issue", this.form.issue);
                formdata.append("resolution", this.form.resolution);
                formdata.append("zip_code_postal", this.form.zip_code_postal);
                formdata.append("country", this.form.country);
                formdata.append("city", this.form.city);
                formdata.append("address", this.form.address);
                //formdata.append("status", status);

                var res = await mainservice.create(formdata)

                this.btnloading = false;

                if (!res.status) {
                    if (res.data.first_name) {
                        this.errors.first_name = res.data.first_name
                    }
                    if (res.data.last_name) {
                        this.errors.last_name = res.data.last_name
                    }
                    if (res.data.email) {
                        this.errors.email = res.data.email
                    }
                    // if (res.data.password) {
                    //     this.errors.password = res.data.password
                    // }
                    if (res.data.phone) {
                        this.errors.phone = res.data.phone
                    }
                    if (res.data.brand_id) {
                        this.errors.brand_id = res.data.brand_id
                    }
                    if (res.data.itme_type_id) {
                        this.errors.itme_type_id = res.data.itme_type_id
                    }
                    if (res.data.product_id) {
                        this.errors.product_id = res.data.product_id
                    }
                    if (res.data.serial) {
                        this.errors.serial = res.data.serial
                    }
                    if (res.data.purchase_date) {
                        this.errors.purchase_date = res.data.purchase_date
                    }
                    if (res.data.issue) {
                        this.errors.issue = res.data.issue
                    }
                    if (res.data.resolution) {
                        this.errors.resolution = res.data.resolution
                    }
                    if (res.data.zip_code_postal) {
                        this.errors.zip_code_postal = res.data.zip_code_postal
                    }
                    if (res.data.country) {
                        this.errors.country = res.data.country
                    }
                    if (res.data.city) {
                        this.errors.city = res.data.city
                    }
                    if (res.data.address) {
                        this.errors.address = res.data.address
                    }
                    //errors here
                } else {
                    //suuccess here
                    this.$router.push({ name: "auth.login" });
                }
            }
        },
        loadChildList(issue, num) {
            switch (num) {
                case 1:
                    this.subIssues1 = (issue.children.length > 0) ? issue.children : []
                    this.subIssues2 = []
                    this.subIssues3 = []
                    break;
                case 2:
                    this.subIssues2 = (issue.children.length > 0) ? issue.children : []
                    this.subIssues3 = []
                    break;
                case 3:
                    this.subIssues3 = (issue.children.length > 0) ? issue.children : []
                    break;
            }
        }
    },
    computed: {
        user() {
            return this.$store.getters.loggedInUser;
        },
        filter() {
            return this.caseSensitive ? (item, search, textKey) => item[textKey].indexOf(search) > -1 : undefined
        },
    },
    data() {
        return {
            brands: [],
            itemTypes: [],
            products: [],
            issues: [],
            subIssues1: [],
            subIssues2: [],
            subIssues3: [],
            resolutions: [
                {
                    id: 1,
                    name: 'CF - Warranty Claim'
                },

            ],
            selectedCountry: null,
            country: [
                {
                    value: 'CA',
                    text: 'Canada'
                },
                {
                    value: 'US',
                    text: 'United States'
                },
            ],
            form: {
                id: (this.$route.params.id ? this.$route.params.id : 0),
                item_number: '',
                unit: '',
                brand_id: 0,
                itme_type_id: 0,
                product_id: 0,
                serial: '',
                purchase_date: '',
                issue: 0,
                resolution: 1,
                zip_code_postal: '',
                country: '',
                city: '',
                address: '',
            },
            errors: {
                first_name: [],
                last_name: [],
                email: [],
                // password: [],
                phone: [],
                brand_id: [],
                itme_type_id: [],
                product_id: [],
                serial: [],
                purchase_date: [],
                issue: [],
                resolution: [],
                zip_code_postal: [],
                country: [],
                city: [],
                address: [],
            },
            loading: false,
            btnloading: false,
            rules: {
                required: (value) => !!value || "Required.",
            },
            open: [1, 2],
            search: null,
            caseSensitive: false,
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            purchase_date_menu: false,
        };
    },
};
</script>

<style>
.issues-list {
    overflow-y: scroll;
}

.issues-list .v-list-item__icon {
    order: 2;
}

.heading_one{
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>

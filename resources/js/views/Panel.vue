<template>
    <v-row>
        <!-- <v-col v-if="user.role_id==1" cols="3">
            <v-card class="mt-4 mx-auto" elevation="0">
                <v-sheet class="v-sheet--offset mx-auto" color="cyan" elevation="5" max-width="calc(100% - 32px)">
                    <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16"></v-sparkline>
                </v-sheet>

                <v-card-text class="pt-0">
                    <div class="text-h6 font-weight-light mb-2 mt-2">
                        Total Cases
                    </div>

                    <v-divider class="my-2"></v-divider>
                    <v-icon class="mr-2" small>
                        mdi-clock
                    </v-icon>
                    <span class="text-caption grey--text font-weight-light">last case 26 minutes ago</span>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col v-if="user.role_id==1" cols="3">
            <v-card class="mt-4 mx-auto" elevation="0">
                <v-sheet class="v-sheet--offset mx-auto" color="cyan" elevation="5" max-width="calc(100% - 32px)">
                    <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16"></v-sparkline>
                </v-sheet>

                <v-card-text class="pt-0">
                    <div class="text-h6 font-weight-light mb-2 mt-2">
                        Cases Open
                    </div>

                    <v-divider class="my-2"></v-divider>
                    <v-icon class="mr-2" small>
                        mdi-clock
                    </v-icon>
                    <span class="text-caption grey--text font-weight-light">last case 26 minutes ago</span>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col v-if="user.role_id==1" cols="3">
            <v-card class="mt-4 mx-auto" elevation="0">
                <v-sheet class="v-sheet--offset mx-auto" color="cyan" elevation="5" max-width="calc(100% - 32px)">
                    <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16"></v-sparkline>
                </v-sheet>

                <v-card-text class="pt-0">
                    <div class="text-h6 font-weight-light mb-2 mt-2">
                        Cases In Progress
                    </div>

                    <v-divider class="my-2"></v-divider>
                    <v-icon class="mr-2" small>
                        mdi-clock
                    </v-icon>
                    <span class="text-caption grey--text font-weight-light">last case 26 minutes ago</span>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col v-if="user.role_id==1" cols="3">
            <v-card class="mt-4 mx-auto" elevation="0">
                <v-sheet class="v-sheet--offset mx-auto" color="cyan" elevation="5" max-width="calc(100% - 32px)">
                    <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16"></v-sparkline>
                </v-sheet>

                <v-card-text class="pt-0">
                    <div class="text-h6 font-weight-light mb-2 mt-2">
                        Cases Validated
                    </div>

                    <v-divider class="my-2"></v-divider>
                    <v-icon class="mr-2" small>
                        mdi-clock
                    </v-icon>
                    <span class="text-caption grey--text font-weight-light">last case 26 minutes ago</span>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col v-if="user.role_id==2||user.role_id==14||user.role_id==26" cols="3">
            <countWidget :icon="'mdi-information'" linkUri="auth.tickets.listing" :queryParams="{ticket_running_status: 0}" :count="customer.need_information" :loading="customer.loading" :title="'Need Information'" />
        </v-col>
        <v-col v-if="user.role_id==2||user.role_id==14" cols="3">
            <countWidget :icon="'mdi-check'" linkUri="auth.tickets.listing" :queryParams="{ticket_running_status: 2}" :count="customer.valid" :loading="customer.loading" :title="'Valid Tickets'" />
        </v-col>
        <v-col v-if="user.role_id==2||user.role_id==14" cols="3">
            <countWidget :icon="'mdi-clock-time-six'" linkUri="auth.tickets.listing" :queryParams="{ticket_running_status: 3}" :count="customer.invalid" :loading="customer.loading" :title="'In-Valid Tickets'" />
        </v-col>
        <v-col v-if="user.role_id==2||user.role_id==14||user.role_id==26" cols="3">
            <countWidget :icon="'mdi-check-all'" linkUri="auth.tickets.listing" :queryParams="{ticket_running_status: 1}" :count="customer.upload_complete" :loading="customer.loading" :title="'Upload Complete'" />
        </v-col>
        <v-col v-if="user.role_id==14||user.role_id==17||user.role_id==25||user.role_id==18||user.role_id==19||user.role_id==20||user.role_id==26" cols="3">
            <countWidget :icon="'mdi-ticket'" linkUri="auth.tickets.listing" :queryParams="{}" :count="assigned_tickets" :loading="customer.loading" :title="'Assigned Tickets'" />
        </v-col>
        <v-col v-if="user.role_id==25" cols="3">
            <countWidget :icon="'mdi-receipt-text-check'" linkUri="auth.tickets.listing" :queryParams="{ticket_running_status: 4}" :count="customer.call_success_fixed" :loading="customer.loading" :title="'Callback Sucessful - Fixed'" />
        </v-col>
        <v-col v-if="user.role_id==25" cols="3">
            <countWidget :icon="'mdi-receipt-text-minus'" linkUri="auth.tickets.listing" :queryParams="{ticket_running_status: 5}" :count="customer.call_success_notfixed" :loading="customer.loading" :title="'Callback Sucessful - Not Fixed'" />
        </v-col>
        <v-col v-if="user.role_id==25" cols="3">
            <countWidget :icon="'mdi-call-missed'" linkUri="auth.tickets.listing" :queryParams="{ticket_running_status: 6}" :count="customer.no_answer_end_call" :loading="customer.loading" :title="'No Answer - End Call'" />
        </v-col>
        <v-col v-if="user.role_id==25" cols="3">
            <countWidget :icon="'mdi-voicemail'" linkUri="auth.tickets.listing" :queryParams="{ticket_running_status: 7}" :count="customer.no_answer_voicemail" :loading="customer.loading" :title="'No Answer - Left Voicemail'" />
        </v-col>
        <v-col v-if="user.role_id==25" cols="3">
            <countWidget :icon="'mdi-information'" linkUri="auth.tickets.listing" :queryParams="{ticket_running_status: 0}" :count="customer.need_information" :loading="customer.loading" :title="'New Tickets'" />
        </v-col> -->
    </v-row>
</template>
<script>
import otherrequestservice from "@services/auth/otherrequests";
import countWidget from "@/components/counts/index.vue";
export default {
    components:{
        countWidget
    },
    data() {
        return {
            // labels: [
            //     '12am',
            //     '3am',
            //     '6am',
            //     '9am',
            //     '12pm',
            //     '3pm',
            //     '6pm',
            //     '9pm',
            // ],
            // value: [
            //     200,
            //     675,
            //     410,
            //     390,
            //     310,
            //     460,
            //     250,
            //     240,
            // ],
            // customer:{
            //     need_information: 0,
            //     valid: 0,
            //     invalid: 0,
            //     upload_complete: 0,
            //     call_success_fixed: 0,
            //     call_success_notfixed: 0,
            //     no_answer_end_call: 0,
            //     no_answer_voicemail: 0,
            //     loading: true,
            // },
            // assigned_tickets: 0,
        };
    },
    async mounted() {
        // this.$store.commit('setPanelFull',true);
        // if(this.user.role_id==2){
        //     this.customer.loading = true
        //     await otherrequestservice.get(`dashboard/tickets`).then(e=>{
        //         this.customer = {
        //             need_information: e.data.need_information,
        //             valid: e.data.valid,
        //             invalid: e.data.invalid,
        //             upload_complete: e.data.upload_complete,
        //             call_success_fixed: e.data.call_success_fixed,
        //             call_success_notfixed: e.data.call_success_notfixed,
        //             no_answer_end_call: e.data.no_answer_end_call,
        //             no_answer_voicemail: e.data.no_answer_voicemail,
        //             loading: false,
        //         }
        //     })
        //     this.customer.loading = false
        // }
        // else if(this.user.role_id==14||this.user.role_id==25||this.user.role_id==26){
        //     this.customer.loading = true
        //     await otherrequestservice.get(`dashboard/user-tickets`).then(e=>{
        //         this.customer = {
        //             need_information: e.data.need_information,
        //             valid: e.data.valid,
        //             invalid: e.data.invalid,
        //             upload_complete: e.data.upload_complete,
        //             call_success_fixed: e.data.call_success_fixed,
        //             call_success_notfixed: e.data.call_success_notfixed,
        //             no_answer_end_call: e.data.no_answer_end_call,
        //             no_answer_voicemail: e.data.no_answer_voicemail,
        //             loading: false,
        //         }
        //     })
        //     this.customer.loading = false
        // }
        // this.customer.loading = true
        // await otherrequestservice.get(`dashboard/assigned-ticket`).then(e=>{
        //     this.assigned_tickets = e.data.assigned_ticket
        // })
        // this.customer.loading = false
    },
    computed: {
        // user() {
        //     return this.$store.getters.loggedInUser;
        // },
    },
};
</script>

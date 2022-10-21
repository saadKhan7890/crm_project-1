<template>
    <div v-html="html">
    </div>
</template>
<script>
import otherrequestservice from "@services/auth/otherrequests";
export default {
    async mounted(){
        if(this.$route.query.serial){
            const serial = this.$route.query.serial
            const formData = new FormData();
            formData.append('txtserialnum', serial);
            const res = await otherrequestservice.post('lookup', formData).then(e=>e.data)
            this.html = res
        }
    },
    data(){
        return{
            html: '',
        }
    }
}
</script>
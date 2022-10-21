<template>
    <v-chip class="ma-2" :color="color" outlined><v-icon left>{{icon}}</v-icon>{{text}}</v-chip>
</template>
<script>
export default {
    props:{
        color:{
            default: 'success',
            type: String,
        },
        icon:{
            default: '',
            type: String,
        },
        text:{
            default: '',
            type: String,
        },
    },
}
</script>
<template>
    <div>
        <v-card class="mycard">
            First Box
        </v-card>
        <v-card class="mycard">
            Second Box
        </v-card>
        <v-card class="mycard">
            Third Box
        </v-card>
    </div>
</template>
<script>
export default {
    name: "rightsidemenu"
}
</script>
<style scoped>
.mycard.v-card.v-sheet.theme--light {
    width: 100%;
    height: 30%;
    padding: 10px 10px;
    margin: 9px 16px;
}
</style>

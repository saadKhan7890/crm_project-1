<template>
  <v-row>
    <v-col cols="12">
      <v-sheet
        :color="!notification.read_at ? 'green lighten-4' : 'white'"
        elevation="2"
        height="50"
        class="mx-auto mb-2"
        :rounded="true"
        v-for="notification in notifications"
        :key="notification.id"
      >
        <v-col cols="12">
          {{notification.data.message}}
          <v-btn
            color="info"
            dark
            x-small
             :to="{ name: notification.data.route, params: { id: notification.data.param } }"
          >
            View
          </v-btn>
        </v-col>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
import notificationsservice from "@services/auth/notifications";
export default {
  data() {
    return {
      model: [],
      page: 1,
      max_page: 0,
      notifications: [],
    };
  },
  mounted() {
    this.getList();
  },
  watch: {},
  methods: {
    async getList() {
      if (this.page == 1) {
        this.notifications = [];
      }
      let result = await notificationsservice.getlist("?page=" + this.page);
      this.max_page = result.last_page;
      this.notifications.push(...result.data);
      this.$store.commit('setUserNotification',0)
    },
  },
  components: {},
  computed: {
    user() {
      return this.$store.getters.loggedInUser;
    },
  },
};
</script>

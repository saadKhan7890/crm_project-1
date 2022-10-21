<!DOCTYPE html>
<html>
<head>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
    <link href="/css/responsive.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <title>Curtis INT CRM</title>
</head>

<body id="main">
    <div id="app">
        <v-app>
            <newbar :showsidebar="sideBarStatus"></newbar>
            <v-main>
                <v-container class="mt-16">
                    <v-card :elevation="(isPanelFull === true ? '0' : '1')"
                        :class="(isPanelFull === true ? 'transparent' : '')">
                        <router-view />
                    </v-card>
                </v-container>
            </v-main>
        </v-app>
        <notifications :notificaitontext="notificaitontext" :notificaitonstatus="notificaitonstatus" />
    </div>
    <script src="/js/app.js"></script>
    <script src="/chat/chat-frame.js"></script>


</body>

</html>

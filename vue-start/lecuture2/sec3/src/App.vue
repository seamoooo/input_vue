<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon @click="toggleSideMenu"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>アドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <SideNav />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    SideNav,
  },
  data() {
    return {
      //
    };
  },
  methods: {
    // actionsに定義してあるのに、methodsを毎回呼び出すのは冗長
    // そのためmapActionsをして、省略する
    openSideNav() {
      this.$store.dispatch("toggleSideMenu");
    },
    // 分割代入でactionsのメソッドを追加することができる
    ...mapActions(["toggleSideMenu"]),
  },
};
</script>

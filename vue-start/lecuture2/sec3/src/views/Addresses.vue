
<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>連絡先一覧</h1>
      </v-flex>
      <v-flex xs12 mt-5 text-xs-right>
        <router-link :to="{ name: 'addresses_edit' }">
          <v-btn color="info">連絡先追加</v-btn>
        </router-link>
      </v-flex>
      <v-flex xs12 mt-5 justify-center>
        <v-data-table :headers="headers" :items="addresses">
          <template v-slot:items="data">
            <td class="text-xs-left">{{ data.item.name }}</td>
            <td class="text-xs-left">{{ data.item.tel }}</td>
            <td class="text-xs-left">{{ data.item.email }}</td>
            <td class="text-xs-left">{{ data.item.address }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  created() {
    this.addresses = this.$store.state.addresses;
  },
  data() {
    return {
      headers: [
        { text: "名前", value: "name" },
        { text: "電話番号", value: "tel" },
        { text: "メールアドレス", value: "email" },
        { text: "住所", value: "address" },
      ],
      addresses: [],
    };
  },
};
</script>
const ListTitle = {
  template: `
    <h2>ユーザーリスト</h2>
  `,
};

const UserDteail = {
  // 「親から」定義したプロパティを受け取ることができる
  // :user='Userオブジェクト'の形で渡される
  // propsの値を直接受け取ることができない
  props: {
    user: {
      type: Object,
    },
    // v-bindがケバブで渡して、propsがキャメルで受け取る
    userName: { type: Object },
  },
  // propsもdataと同じようにアクセスすることができる
  template: `
  <div>
  <h2>選択中のユーザー</h2>
  <input v-model="user.name">
  {{ user.name }}
  `,
};

const UserList = {
  components: {
    // ハイフンを消して呼び出す
    'list-title': ListTitle,
    'user-detail': UserDteail,
  },
  data() {
    // componentの場合必ず関数を返さなえればならない
    return {
      users: [
        { id: 1, name: 'ユーザー１' },
        { id: 2, name: 'ユーザー2' },
        { id: 3, name: 'ユーザー3' },
        { id: 4, name: 'ユーザー4' },
        { id: 5, name: 'ユーザー5' },
      ],
      select_users: {},
    };
  },
  // templateの直下では単一の要素しか並べることができない
  template: `
    <div>
      <list-title></list-title>
      <ul>
        <li v-for="user in users" :key="user.id" @click="select_users = user">
          {{ user.name }}
        </li>
      </ul>
      <user-detail :user='select_users' :user-name='select_users.name'></user-detail>
    </div>
  `,
};

const vm = new Vue({
  el: '#app',
  components: {
    'user-list': UserList,
  },
});

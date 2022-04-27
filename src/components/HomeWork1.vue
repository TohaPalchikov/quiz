<template>
  <div>
    <MyProfile :user="user" />
    <Statistics :data="data" :title="' '" />
    <FriendList :friends="friends" />
    <TransactionHistory :transaction="transaction" class="mt-20" />
  </div>
</template>

<script>
import { userJson } from "../jsons/user.js";
import { dataJson } from "../jsons/data";
import { friendsJson } from "../jsons/friends";
import { transactionJson } from "../jsons/transaction";
import MyProfile from "./MyProfile.vue";
import Statistics from "./Statistics.vue";
import FriendList from "./FriendList.vue";
import TransactionHistory from "./TransactionHistory.vue";
export default {
  data() {
    return {
      user: {},
      data: [],
      friends: [],
      transaction: [],
    };
  },
  mounted() {
    this.user = userJson;
    this.data = dataJson;
    this.friends = friendsJson;
    this.transaction = transactionJson;
  },
  components: {
    MyProfile,
    Statistics,
    FriendList,
    TransactionHistory,
  },
};
</script>
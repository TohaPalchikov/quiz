<template>
  <div class="">
    <div v-for="friend in friends" :key="friend" class="mt-6">
      <FrindsListItem
        :avatar="friend.avatar"
        :name="friend.name"
        :isOnline="friend.isOnline"
      />
    </div>
  </div>
</template>

<script>
import FrindsListItem from "./FrindsListItem.vue";
export default {
  props: ["friends"],
  components: { FrindsListItem },
};
</script>
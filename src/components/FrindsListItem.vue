<template>
  <div class="w-1/6 h-1/6 shadow-black border m-auto flex bg-white shadow-xl">
    <div
      v-if="isOnline"
      class="w-5 h-5 rounded-full bg-green-600 my-auto"
    ></div>
    <div v-else class="w-5 h-5 rounded-full bg-red-600 my-auto"></div>
    <img :src="avatar" alt="" class="rounded-xl w-20 h-20" />
    <div class="my-auto font-bold">{{ name }}</div>
  </div>
</template>

<script>
export default {
  props: ["avatar", "name", "isOnline"],
};
</script>
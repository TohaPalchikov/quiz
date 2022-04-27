<template>
  <div
    class="bg-white w-1/6 h-3/6 m-auto rounded-md truncate shadow"
    v-if="user.stats"
  >
    <div class="h-5/6 pt-10">
      <img
        :src="user.avatar"
        alt=""
        class="rounded-full w-28 h-28 bg-black mx-auto"
      />
      <div class="font-semibold text-2xl pt-5 text-center antialiased">
        {{ user.username }}
      </div>
      <div class="text-center pt-2 text-gray-400">@{{ user.tag }}</div>
      <div class="text-center pt-2 text-gray-400">{{ user.location }}</div>
    </div>
    <div class="bg-gray-200 w-full h-2/6 flex border">
      <div class="w-1/3 border-r border-t border-gray-300 h-100 text-center">
        Followers <br />
        <strong>{{ user.stats.followers }}</strong>
      </div>
      <div class="w-1/3 border-r border-t border-gray-300 h-100 text-center">
        Views <br /><strong>{{ user.stats.views }}</strong>
      </div>
      <div class="w-1/3 border-t border-gray-300 h-100 text-center">
        Likes <br /><strong>{{ user.stats.likes }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    user: {
      username: String,
      avatar: String,
      tag: String,
      location: String,
      stats: {
        followers: Number,
      },
    },
  },
};
</script>
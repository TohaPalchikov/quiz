<template>
<h2 class="w-max h-1/5 m-auto mt-20" v-if="title">{{title}}</h2>
  <div class="w-max h-1/6  m-auto  flex" >
    <div class="w-32 h-24 text-center mt-4 pt-2 border border-black" v-for="stat in data" :key="stat">
      {{ stat.label }} <br>
      <span class=" text-2xl ">{{stat.percentage}}%</span>
      
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "title"],
};
</script>
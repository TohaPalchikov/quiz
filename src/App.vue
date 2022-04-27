<template>
  <div class="bg-gray-300 w-screen h-max pt-16">
    <div id="app">
      <HomeWork1 />
      <div class="text-center mt-10">
        <h2 class="text-4xl">Please leave feedback</h2>
        
          <button @click="state.good++" class="p-5 border-2">Good</button>
          <button @click="state.neutral++" class="p-5 border-2">Neutral</button>
          <button @click="state.bad++" class="p-5 border-2">Bad</button> <br />
          <div v-if="total">
          <StatisticsWork2
            :good="state.good"
            :neutral="state.neutral"
            :bad="state.bad"
            :countPositiveFeedbackPercentage="countPositiveFeedbackPercentage"
            :total="total"
          />
          <br />
        </div>
        <div v-else> 
          <h2 class="text-4xl">Not a feedback</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-300 w-screen h-screen pt-16"></div>
</template>
<script>
import HomeWork1 from "./components/HomeWork1.vue";
import StatisticsWork2 from "./components/StatisticsWork2.vue";
export default {
  data() {
    return {
      state: {
        good: 0,
        neutral: 0,
        bad: 0,
      },
    };
  },
  computed: {
    total() {
      return this.state.good + this.state.neutral + this.state.bad;
    },
    countPositiveFeedbackPercentage() {
      return Math.trunc(
        (this.state.good /
          (this.state.good + this.state.neutral + this.state.bad)) *
          100
      );
    },
  },
  components: {
    HomeWork1,
    StatisticsWork2,
  },
};
</script>
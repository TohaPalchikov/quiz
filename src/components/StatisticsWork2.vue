<template>
  <div>
    <h2 class="text-4xl">Statistics</h2>
    <br />
    <span class="text-xl">Good: {{ good }}</span> <br />
    <span class="text-xl">Neutral: {{ neutral }}</span> <br />
    <span class="text-xl">Bad: {{ bad }}</span> <br />
    <span class="text-xl">Total: {{ total }}</span> <br />
    <span class="text-xl" v-if="countPositiveFeedbackPercentage"
      >Positive Feedback: {{ countPositiveFeedbackPercentage }}%</span
    >
  </div>
</template>

<script>
export default {
  props: ["good", "neutral", "bad", "total", "countPositiveFeedbackPercentage"],
};
</script>
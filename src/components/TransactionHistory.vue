<template>
  <table v-if="transaction" class="m-auto">
      <thead>
          <tr >
              <th class="w-56 bg-blue-300 h-16 text-white border-r-2">Type</th>
              <th class="w-56 bg-blue-300 h-16 text-white">Amount</th>
              <th class="w-56 bg-blue-300 h-16 text-white border-l-2">Currency</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="trans in transaction" :key="trans" class="border  w-96 h-14">
              <td class=" text-center border-r-2">{{trans.type}}</td>
              <td class=" text-center">{{trans.amount}}</td>
              <td class=" text-center border-l-2">{{trans.currency}}</td>
          </tr>
      </tbody>
  </table>
</template>

<script>
export default {
    props: ["transaction"]
};
</script>
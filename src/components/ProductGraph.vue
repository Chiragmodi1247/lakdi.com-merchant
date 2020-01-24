<template>
  <v-sparkline
    :value="value"
    :labels="labels"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :color="color"
    :auto-line-width="autoLineWidth"
    auto-draw
  ></v-sparkline>
</template>

<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#000", "#000", "#000"]
];

export default {
  data: () => ({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[5],
    value: [20, 2, 25, 9, 5, 10],
    gradientDirection: "top",
    gradients,
    color: gradients[2][0],
    fill: false,
    type: "trend",
    autoLineWidth: false
  })
};
</script>

<template>
  <div class=" dark:bg-green-700 dark:text-white  bg-white rounded p-2 mx-3 my-1 text-rose-500 font-bold">
    <small>{{ timeData.days }}</small>
    天
    <small>{{ timeData.hours }}</small>
    :
    <small>{{ timeData.minutes }}</small>
    :
    <small>{{ timeData.seconds }}</small>
  </div>
</template>

<script setup lang="ts">
interface ITimeData {
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}

const props = withDefaults(defineProps<{ time: string }>(), {})
const timer = ref()
const time = ref(0)
const timeData = ref<ITimeData>({})
time.value = new Date(props.time).getTime() - Date.now()

timer.value = setInterval(() => {
  if (time.value >= 0) {
    time.value = time.value - 1000
    timeData.value = formatTime(time.value)
    console.log(timeData.value);
  } else {
    clearInterval(timer.value)
    timeData.value = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }
}, 1000)

function formatTime(timeData: any) {
  let times = timeData / 1000
  let time: any = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  if (times > 0) {
    time.days = Math.floor(times / (60 * 60 * 24))
    time.hours = Math.floor(times / (60 * 60)) - time.days * 24;
    time.minutes = Math.floor(times / 60) - time.days * 24 * 60 - time.hours * 60;
    time.seconds = Math.floor(times) - time.days * 24 * 60 * 60 - time.hours * 60 * 60 - time.minutes * 60;
  }

  //补零

  time.days = time.days < 10 ? "0" + time.days : time.days;
  time.hours = time.hours < 10 ? "0" + time.hours : time.hours;
  time.minutes = time.minutes < 10 ? "0" + time.minutes : time.minutes;
  time.seconds = time.seconds < 10 ? "0" + time.seconds : time.seconds;
  console.log(time, 'time');

  return time;
}
onUnmounted(() => {
  clearInterval(timer.value)
})




</script>

<style scoped></style>
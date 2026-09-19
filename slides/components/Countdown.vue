<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue'

const props = defineProps<{ minutes?: number }>()
const total = (props.minutes ?? 5) * 60
const left = ref(total)
let timer: ReturnType<typeof setInterval> | undefined

const label = computed(() => {
  const m = String(Math.floor(left.value / 60)).padStart(2, '0')
  const s = String(left.value % 60).padStart(2, '0')
  return `${m}:${s}`
})

function start() {
  if (timer) return
  timer = setInterval(() => {
    if (left.value > 0) left.value -= 1
    else stop()
  }, 1000)
}
function stop() {
  if (timer) clearInterval(timer)
  timer = undefined
}
function reset() {
  stop()
  left.value = total
}
onUnmounted(stop)
</script>

<template>
  <div class="text-center select-none">
    <div class="font-mono font-bold" :class="left <= 30 ? 'text-red-500' : left === 0 ? 'text-red-700' : ''" style="font-size: 10rem; line-height: 1">{{ label }}</div>
    <div class="mt-8 flex justify-center gap-3">
      <button class="px-5 py-2 rounded bg-blue-500 text-white text-lg" @click="start">Démarrer</button>
      <button class="px-5 py-2 rounded bg-gray-200 text-gray-800 text-lg" @click="stop">Pause</button>
      <button class="px-5 py-2 rounded bg-gray-200 text-gray-800 text-lg" @click="reset">Remettre à zéro</button>
    </div>
  </div>
</template>

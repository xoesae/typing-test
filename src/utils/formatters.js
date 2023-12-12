export function formatTime(minutes, seconds) {
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export function formatPercentage(value) {
  return `${(value * 100).toFixed(2)}%`
}
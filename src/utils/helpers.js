import { formatPercentage } from "./formatters"

export function getPrecision(words, keysPressed) {
    let wordsKeys = 0
    let precision = 0

    words.forEach(word => {
        if (word.isCorrect) {
            wordsKeys += word.value.length ?? 0
        }
    })

    if (keysPressed > 0) {
        precision = wordsKeys / keysPressed
    }

    return formatPercentage(precision)
}
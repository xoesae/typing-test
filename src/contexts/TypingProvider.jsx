import { useState } from "react"
import TypingContext from "./TypingContext"
import DictionaryApi from "../services/api/DictionaryApi"

function TypingProvider({ children }) {
    const [typing, setTyping] = useState('')
    const [actualWord, setActualWord] = useState('')
    const [words, setWords] = useState([])
    const [nextWords, setNextWords] = useState([])
    const [countPressedKeys, setCountPressedKeys] = useState(0)
    const [isFetching, setIsFetching] = useState(false)
    const [started, setStarted] = useState(false)

    const getOneWord = () => {
        setIsFetching(true)
    
        DictionaryApi
            .get('/random')
            .then((response) => {
                if (actualWord === '') {
                    setActualWord(response.data.word)
                    return
                }

                setNextWords([...nextWords, response.data.word])
            })
            .finally(() => setIsFetching(false))
    }

    const handleTyping = (e) => {
        const value = e.target.value
    
        if (! started) {
          setStarted(true)
        }
    
        const valueIsEmpty = value === '' || value === ' '
        const valueIsBackspace = value <= typing
        const lastCharIsSpace = /\s+$/.test(value)
    
        if (!valueIsEmpty && !valueIsBackspace && !lastCharIsSpace) {
          setCountPressedKeys(countPressedKeys + 1)  
        }
    
        if (lastCharIsSpace && valueIsEmpty) {
          return
        }
    
        if (lastCharIsSpace) {
          const nextWord = nextWords[0]
          const newWord = {
            value: actualWord,
            isCorrect: actualWord === value.slice(0, -1),
          }
    
          setWords([...words, newWord])
          setNextWords(nextWords.slice(1))
          setActualWord(nextWord)
          setTyping('')
    
          return
        }
    
        setTyping(value)
    
        if (nextWords.length < 5 && !isFetching) {
          getOneWord()
        }
      }

    const reset = () => {
        setStarted(false)
        setNextWords([])
        setActualWord('')
        getOneWord()
        setTyping('')
        setWords([])
        setCountPressedKeys(0)
    }

    const value = {
        typing, setTyping,
        actualWord, setActualWord,
        words, setWords,
        nextWords, setNextWords,
        countPressedKeys, setCountPressedKeys,
        isFetching, setIsFetching,
        started, setStarted,
        getOneWord,
        handleTyping,
        reset,
    }

    return (
        <TypingContext.Provider value={value}>
            {children}
        </TypingContext.Provider>
    )
}

export default TypingProvider

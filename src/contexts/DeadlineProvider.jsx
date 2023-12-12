import { createContext, useContext, useEffect, useState } from "react"
import { useTyping } from "./TypingProvider"

const INITIAL_DEADLINE_IN_SECONDS = 60

export const DeadlineContext = createContext()

export const DeadlineProvider = ({ children }) => {
    const { started } = useTyping()
    const [deadline, setDeadline] = useState(INITIAL_DEADLINE_IN_SECONDS)
    const [isEnded, setIsEnded] = useState(false)
    const clearDeadline = () => {
        setDeadline(INITIAL_DEADLINE_IN_SECONDS)
        setIsEnded(false)
    }
    const minutes = Math.floor(deadline / 60)
    const seconds = deadline % 60

    useEffect(() => {
        if (! started) {
            return
        }

        const intervalId = setInterval(() => {
            setDeadline((prev) => prev - 1);
        }, 1000)
    
        if (deadline <= 0) {
            clearInterval(intervalId)
        }

        setIsEnded(deadline <= 0)
    
        return () => clearInterval(intervalId);
    }, [deadline, started])
    
    const value = {
        deadline, setDeadline,
        clearDeadline,
        isEnded,
        minutes, seconds,
    }

    return (
        <DeadlineContext.Provider value={value}>
            {children}
        </DeadlineContext.Provider>
    )
}

export const useDeadline = () => {
    return useContext(DeadlineContext)
}

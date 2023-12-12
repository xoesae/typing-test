import { useEffect, useState } from "react"
import useTyping from "../hooks/useTyping"
import DeadlineContext from "./DeadlineContext"

const INITIAL_DEADLINE_IN_SECONDS = 60

function DeadlineProvider ({ children }) {
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

export default DeadlineProvider
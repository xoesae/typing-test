import { useContext } from "react"
import TypingContext from "../contexts/TypingContext"

function useTyping () {
    return useContext(TypingContext)
}

export default useTyping
import { useContext } from "react"
import DeadlineContext from "../contexts/DeadlineContext"

function useDeadline() {
    return useContext(DeadlineContext)
}

export default useDeadline
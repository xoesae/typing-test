import { formatTime } from "../utils/formatters"
import useDeadline from "../hooks/useDeadline"

function Deadline() {
    const {deadline, minutes, seconds } = useDeadline()

    return (
        <div className={`p-4 w-1/5 rounded flex items-center justify-center ${deadline > 5 ? 'bg-gray-400' : 'bg-red-300'}`}>
            { formatTime(minutes, seconds) }
        </div>
    )
}

export default Deadline
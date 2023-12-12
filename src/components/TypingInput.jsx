import { useTyping } from "../contexts/TypingProvider"

function TypingInput({ handleTyping }) {
    const { typing } = useTyping()

    return (
        <input
            type="text" 
            className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500'
            value={typing}
            placeholder="Comece a digitar..."
            onChange={handleTyping}
        />
    )
}

export default TypingInput
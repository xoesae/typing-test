import { useTyping } from "../contexts/TypingProvider"

function ActualWord() {
    const { typing, actualWord } = useTyping()
    const isCorrect = actualWord?.startsWith(typing)

    return (
        <div className='w-100 h-24 flex items-center justify-center'>
            <p className={`p-2 rounded-lg text-lg ${isCorrect ?  'bg-gray-400' : 'bg-red-400' }`}>{ actualWord }</p>
        </div>
    )
}

export default ActualWord
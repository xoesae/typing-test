import { useTyping } from "../contexts/TypingProvider"

function WordHistory() {
  const { words } = useTyping()
  
  return (<>
    <hr className="my-4 border-dashed border-slate-300" />

    <h2 className='text-2xl font-bold text-slate-300'>Histórico</h2>

    <div className='mt-2 flex gap-1 flex-wrap'>
        { words.map((word, index) => (
            <span 
                key={word.value + index} 
                className={`rounded p-1 ${word.isCorrect ? 'bg-green-300' : 'bg-red-300'}`}
            >
                {word.value}
            </span>
        ))}
    </div>
  </>)
}

export default WordHistory
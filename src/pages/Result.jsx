import { useDeadline } from "../contexts/DeadlineProvider"
import { useTyping } from "../contexts/TypingProvider"
import { getPrecision } from "../utils/helpers"

function Result() {
    const { clearDeadline } = useDeadline()
    const { words, countPressedKeys, reset } = useTyping()

    const correct = words.filter(word => word.isCorrect).length
    const handlePlayAgain = () => {
        reset()
        clearDeadline()
    }

    return (<>
        <div className="container mx-auto mt-8 p-5">
            <h1 className='text-2xl font-bold text-slate-300 mb-4'>Resultado</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-500 text-white p-4 rounded">
                    <p className="font-bold text-lg">Precisão</p>
                    <p className="text-2xl">{getPrecision(words, countPressedKeys)}</p>
                </div>

                <div className="bg-green-500 text-white p-4 rounded">
                    <p className="font-bold text-lg">Teclas pressionadas</p>
                    <p className="text-2xl">{countPressedKeys}</p>
                </div>

                <div className="bg-yellow-500 text-white p-4 rounded">
                    <p className="font-bold text-lg">Palavras totais</p>
                    <p className="text-2xl">{words.length}</p>
                </div>

                <div className="bg-red-500 text-white p-4 rounded">
                    <p className="font-bold text-lg">Palavras corretas</p>
                    <p className="text-2xl">{correct}</p>
                </div>
            </div>

            <button 
                className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded w-full mt-4"
                onClick={handlePlayAgain}
            >
                Jogar Novamente
            </button>
        </div>        
    </>)
}

export default Result
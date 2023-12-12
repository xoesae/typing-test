import useTyping from '../hooks/useTyping'
import { getPrecision } from '../utils/helpers'

function Header() {
    const { words, countPressedKeys } = useTyping()

    return (
        <div className='w-100 grid grid-cols-3 gap-4 p-1 text-gray-300 bg-gray-500'>
            <span className='col-span-1 text-center'>Tecladas: { countPressedKeys }</span>
            <span className='col-span-1 text-center'>Palavras: { words.length }</span>
            <span className='col-span-1 text-center'>Precisão: { getPrecision(words, countPressedKeys) }</span>
        </div>
    )
}

export default Header
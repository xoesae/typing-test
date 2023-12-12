import ActualWord from '../components/ActualWord'
import TypingInput from '../components/TypingInput'
import Deadline from '../components/Deadline'
import WordHistory from '../components/WordHistory'
import Header from '../components/Header'
import { useEffect } from 'react'
import useTyping from '../hooks/useTyping'

function Home() {
  const { getOneWord } = useTyping()

  useEffect(() => {
    getOneWord()
  }, [])

  return (<>
    <Header />
    <div className='px-5'>
      <ActualWord />
      <div className='flex gap-2'>
        <TypingInput />
        <Deadline />
      </div>
      <WordHistory />
    </div>
  </>)
}

export default Home
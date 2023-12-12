import ActualWord from '../components/ActualWord'
import TypingInput from '../components/TypingInput'
import Deadline from '../components/Deadline'
import WordHistory from '../components/WordHistory'
import Header from '../components/Header'
import { getPrecision } from '../utils/helpers'
import { useEffect, useState } from 'react'
import { useTyping } from '../contexts/TypingProvider'


function Home() {
  const { getOneWord, handleTyping } = useTyping()

  useEffect(() => {
    getOneWord()
  }, [])

  return (<>
    <Header />
    <div className='px-5'>
      <ActualWord />
      <div className='flex gap-2'>
        <TypingInput handleTyping={handleTyping} />
        <Deadline />
      </div>
      <WordHistory />
    </div>
  </>)
}

export default Home
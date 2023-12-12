import useDeadline from './hooks/useDeadline'
import Home from './pages/Home'
import Result from './pages/Result'

function App() {
  const { isEnded } = useDeadline()

  return (
    <div className='w-100 h-screen flex align-center justify-center bg-gray-800'>
      <div className='lg:w-1/2 lg:mx-auto w-full'>
        { !isEnded && <Home /> }
        { isEnded && <Result /> }
      </div>
    </div>
  )
}

export default App

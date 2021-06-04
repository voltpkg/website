import Navbar from './components/navbar'
import { FilledButton, OutlinedButton } from './components/button'
import './styles/app.css'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'flex-start',
        'align-items': 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Navbar />
      <h1 className='heading'>
        The fastest NodeJS package manager of the decade
      </h1>
      <h2 className='subheading'>
        Install over 1.3 million packages instantly using volt at lightning
        speed. It is fine tuned for speed
      </h2>
      <FilledButton text='Get Started!' />
    </div>
  )
}

export default App

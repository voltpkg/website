import Logo from '../../public/images/Logo.svg'
import Github from '../assets/Vector.svg'
const Navbar = () => {
  return (
    <div
      style={{
        height: '7vh',
        width: '100vw',
        'border-bottom': '2px solid #E8E8E8',
        display: 'flex',
        'justify-content': 'space-around',
        'align-items': 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        }}
      >
        <img src={Logo} alt='Volt logo' style={{ width: '8rem' }} />
      </div>
      <div
        style={{
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        }}
      >
        <h2
          style={{
            'font-weight': 400,
            'font-size': '20px',
            'margin-left': '10px',
            'margin-right': '10px',
          }}
        >
          Products
        </h2>
        <h2
          style={{
            'font-weight': 400,
            'font-size': '20px',
            'margin-left': '10px',
            ' margin-right ': '10px',
          }}
        >
          Docs
        </h2>
        <h2
          style={{
            'font-weight': 400,
            'font-size': '20px',
            'margin-left': '10px',
            'margin-right': '10px',
          }}
        >
          Contribute
        </h2>
        <h2
          style={{
            'font-weight': 400,
            'font-size': '20px',
            'margin-left': '10px',
            'margin-right ': '10px',
          }}
        >
          Community
        </h2>
      </div>
      <div>
        <img src={Github} width='2rem' height='2rem' />
      </div>
    </div>
  )
}

export default Navbar

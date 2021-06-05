import Logo from '../../assets/Logo.svg'
import github from '../../assets/github.svg'
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import './Home.css'

export const Home = () => {
  return (
    <div className='home'>
      <div className='nav'>
        <div className='section'>
          <img src={Logo} alt='' width='50em' className='logo' />
          <h1 className='title_text'>Volt</h1>
        </div>
        <div className='section'>
          <h3 className='links'>Products</h3>
          <h3 className='links'>Docs</h3>
          <h3 className='links'>Contribute</h3>
          <h3 className='links'>Community</h3>
        </div>
        <div className='section'>
          <img className='contact_icon' src={github} alt='github' />
          <img className='contact_icon' src={twitter} alt='twitter' />
          <img className='contact_icon' src={facebook} alt='facebook' />
        </div>
      </div>
      <div className='homemain'>
        <h2>Fastest NodeJS package manager</h2>
        <div className='search'>
          <input
            type='text'
            className='packagesearch'
            placeholder='Search over 1M+ packages'
          />
          <div className='popsearch'>
            Popular Searches: <a href='/'>volt</a> <a href='/'>solidjs</a>{' '}
            <a href='/'>react</a>
          </div>
        </div>
        <div className='get_started_btn'>Get Started</div>
      </div>
      <div className='stats'>
        <div className='stat_info'>
          <h1 className='stat_val'>1098787</h1>
          <h3 className='stat_name'>packages</h3>
        </div>
        <div className='stat_info'>
          <h1 className='stat_val'>0.30</h1>
          <h3 className='stat_name'>avg time</h3>
        </div>
        <div className='stat_info'>
          <h1 className='stat_val'>5,987</h1>
          <h3 className='stat_name'>hours saved</h3>
        </div>
      </div>
    </div>
  )
}

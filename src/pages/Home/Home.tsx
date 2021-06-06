import Logo from '../../assets/Logo.svg'
import github from '../../assets/github.svg'
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import './Home.css'
import {Counter} from '../../widgets/Counter';

export const Home = () => {
  
  return (
    <div className='home'>
      <div className='nav'>
        <div className='section'>
          <img src={Logo} alt='' width='50em' className='logo' />
        </div>
        <div className='section'>
          <h3 className='links'>Features</h3>
          <h3 className='links'>Docs</h3>
          <h3 className='links'>Contribute</h3>
          <h3 className='links'>Community</h3>
        </div>
        <div className='section'>
          <a href='https://github.com/voltpkg/volt'>
            <img className='contact_icon' src={github} alt='github' />
          </a>
          {/* <a href="https://"></a> */}
          <img className='contact_icon' src={twitter} alt='twitter' />
          <img className='contact_icon' src={facebook} alt='facebook' />
        </div>
      </div>
      <div className='homemain'>
        <h2>The Fastest Node.js Package Manager.</h2>
        <h4>Clean. Lightweight. Robust. Effecient.</h4>
        <div className='search'>
          <input
            type='text'
            className='packagesearch'
            placeholder='Search over 1M+ packages'
          />
        </div>
        <div className='get_started_btn'>Get Started</div>
      </div>
      <div className='stats'>
        <div className='stat_info'>
          <h1 className='stat_val'>
            {/* {state.count} */}
            <Counter  end={1600} start={1000}/>
          </h1>
          <h3 className='stat_name'>packages</h3>
        </div>
        <div className='stat_info'>
          <h1 className='stat_val'>
            <Counter  end={200} start={0}/>
          </h1>
          <h3 className='stat_name'>GB saved</h3>
        </div>
        <div className='stat_info'>
          <h1 className='stat_val'>
            <Counter  end={1589} start={1300}/>
          </h1>
          <h3 className='stat_name'>hours saved</h3>
        </div>
      </div>
    </div>
  )
}

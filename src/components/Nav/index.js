import React, { PropTypes } from 'react'

const Nav = () => (
  <header className='sans-serif'>
    <div 
      className='cover bg-left bg-center-l' 
      style={{
        backgroundImage: 'url(/assets/images/bg.jpg)'
      }}>
      <div className='bg-black-80 pb5 pb6-m pb7-l'>
        <nav className='dt w-100 mw8 center'> 
          <div className='dtc w2 v-mid pa3'>
            <a href='#0' className='dib w3 h2 pa1 grow-large border-box'>
              <img className='link white-90 hover-white' src='/assets/images/codepreneur.png' />
            </a>
          </div>
          <div className='dtc v-mid tr pa3'>
            <a className='f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3' href='#0' >How it Works</a> 
            <a className='f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3' href='#0' >Projects</a> 
            <a className='f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3' href='#0' >About</a> 
            <a className='f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3' href='#0' >Contact</a> 
            <a className='f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba' href='#0' >Blog</a> 
          </div>
        </nav> 
        <div className='tc-l mt4 mt5-m mt6-l ph3'>


          <div className=''>
            <div className='white overflow-hidden relative'>
              <div className='mw8 pb5 ph3 center tc tl-ns'>

                <h1 className='f2 f1-l fw3 white-90 mb0 lh-title pt4-l pt1'>Hi, I am Vaidas (codepreneur)</h1>
                <h2 className='fw3 f3 white-80 mt3 mb4'>freelance full stack javascript developer</h2>
                <a className='f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3' href='#0'>Explore my work</a>
                <span className='dib v-mid ph3 white-70 mb3'>or</span>
                <a className='f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3' href='#0'>Hire me</a>

              </div>
              <div className='dn db-ns iso-row mw7 mw8-l ma0 flex-ns flex-wrap justify-end'>
                <div className='iso-column pa2-m pa3-l w-100'>
                  <div className='iso-card'>
                    <figure className='iso-card-thumb ma2'>
                      <a href="https://www.sc.com/en/" target="_blank">
                        <img src='/assets/images/scsite.png' className='luminous' />
                        <span className='shadow cover2'></span>
                      </a>
                    </figure>
                  </div>
                </div>        
                <div className='iso-column pa2-m pa3-l w-100'>
                  <div className='iso-card'>
                    <figure className='iso-card-thumb ma2'>
                      <a href="https://www.sugges.tv/" target="_blank">
                        <img src='/assets/images/suggestvsite.png' className='luminous' />
                        <span className='shadow cover2'></span>
                      </a>
                    </figure>
                  </div>
                </div>        
                <div className='iso-column pa2-m pa3-l w-100'>
                  <div className='iso-card'>
                    <figure className='iso-card-thumb ma2'>
                      <a href="https://www.kayako.com/" target="_blank">
                        <img src='/assets/images/kayakosite.png' className='luminous' />
                        <span className='shadow cover2'></span>
                      </a>
                    </figure>
                  </div>
                </div>        
                <div className='iso-column pa2-m pa3-l w-100'>
                  <div className='iso-card'>
                    <figure className='iso-card-thumb ma2'>
                      <a href="http://codepreneur.github.io/" target="_blank">
                        <img src='/assets/images/codepreneursite.png' className='luminous' />
                        <span className='shadow cover2'></span>
                      </a>
                    </figure>
                  </div>
                </div>        
                <div className='iso-column pa2-m pa3-l w-100'>
                  <div className='iso-card'>
                    <figure className='iso-card-thumb ma2'>
                      <a href="http://brik.co.uk/" target="_blank">
                        <img src='/assets/images/briksite.png' className='luminous' />
                        <span className='shadow cover2'></span>
                      </a>
                    </figure>
                  </div>
                </div>        
                <div 
                  className='iso-column pa2-m pa3-l w-100' 
                  style={{
                    marginBottom: '10rem'
                  }}>
                  <div className='iso-card'>
                    <figure className='iso-card-thumb ma2'>
                      <a href="http://www.getfitwithdavina.com/" target="_blank">
                        <img src='/assets/images/davinasite.png' className='luminous' />
                        <span className='shadow cover2'></span>
                      </a>
                    </figure>
                  </div>
                </div>

              </div>              

            </div> 
          </div> 

        </div>
      </div>
    </div> 
  </header>
)

Nav.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Nav
import React from "react"
// import LatestPosts from "../../components/LatestPosts"

import Page from "../Page"

const Homepage = (props) => {
  return (
    <Page { ...props }>

      <div className='mw8 mb5 center ph3 pt3'>
        <h2 className='tc fw5 f3 f2-ns pb3 pb1-l mb0'>
          <span>
            <span>Companies that I have </span>
            <b>worked</b>
            <span> with</span>
          </span>
        </h2>
        <div className='mt0 flex flex-wrap justify-center items-center'>
          <div className='w4-l w3 mh4 pv2 pv3-m pv4-l dim pointer grow'>
            <img src='/assets/images/kayako.png' alt='Kayako' />
          </div>    
          <div className='w4-l w3 mh4 pv2 pv3-m pv4-l dim pointer grow'>
            <img src='/assets/images/sc.svg' alt='Standard Chartered Bank' />
          </div>    
          <div className='w4-l w3 mh4 pv2 pv3-m pv4-l dim pointer grow'>
            <img src='/assets/images/brik.svg' alt='Brik' />
          </div>    
          <div className='w4-l w3 mh4 pv2 pv3-m pv4-l dim pointer grow'>
            <img src='/assets/images/qbe.svg' alt='QBE' />
          </div>
          <div className='w4-l w4 mh4 pv2 pv3-m pv4-l ph3 ph1-l dim pointer grow'>
            <img src='/assets/images/getfitwithdavina.svg' alt='Get fit with Davina' />
          </div>    

        </div>
      </div>

      <section 
        className='sans-serif relative cover bg-left bg-center-l' 
        style={{
          backgroundImage: 'url(http://mrmrs.io/photos/u/011.jpg)'
        }}>

        <div className='pa4 bg-black-80' >
          <div className='tc'>
              <h2 className='f2-l f2i-m f3 ttu tracked white'>Receive Our Newsletter</h2>
              <form className='ma0-ns' action='https://tinyletter.com/codepreneur' method='post' target='popupwindow' onSubmit="window.open('https://tinyletter.com/codepreneur', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
                  <input className='v-top h3-ns ba f6-ns f7 mb3 ph4-l w-33-l blr2-l ph3-m w-33-m blr2-m ph2 w-100 br2 h2' type='text' name='email' id='tlemail' placeholder='Your email address' />
                  <input type='hidden' value='1' name='embed' />
                  <input className='ttu tracked v-top b ba f5-ns f6 h3-ns pv0-ns brr2-l ph4-l brr2-m ph3-m br2 pv2 ph4' type='submit' value='Subscribe' />
              </form>
             
          </div>
        </div>
      </section>

      <div className='mw8 mb5 center ph3 pt3'>
        <h2 className='tc fw5 f3 f2-ns pb3 pb1-l mb0'>
          <span>
            <span>Tech that I </span>
            <b>love</b>
            <span> and use</span>
          </span>
        </h2>
        <div className='mt0 flex flex-wrap justify-center items-center '>
          <div className='w4-l w3 mh4 pv2 pv3-m pv4-l dim pointer grow'>
            <img src='/assets/images/react.svg' alt='React' />
          </div>    
          <div className='w4-l w3 mh4 pv2 pv3-m pv4-l dim pointer grow'>
            <img src='/assets/images/graphql.svg' alt='GraphQL' />
          </div>    
          <div className='w4-l w3 mh4 pv2 pv3-m pv4-l dim pointer grow'>
            <img src='/assets/images/relay.svg' alt='Relay' />
          </div>   
          <div className='w4-l w3 mh4 pv2 pv3-m pv4-l dim pointer grow'>
            <img src='/assets/images/javascript.png' alt='JavaScript' />
          </div> 
          <div className='w4-l w3 mh4 pv2 pv3-m pv4-l ph3 ph1-l dim pointer grow'>
            <img src='/assets/images/ember.png' alt='Ember' />
          </div>    
          <div className='w3 mh4 pv2 pv3-m dim pointer grow'>
            <img src='/assets/images/lambda.png' alt='Lambda' />
          </div>
          <div className='w3 mh4 pv2 pv3-m pb0-l ph3 ph1-l dim pointer grow'>
            <img src='/assets/images/openwhisk.png' alt='Open Whisk' />
          </div>    
          <div className='w3 mh4 pv2 pv3-m pb0-l dim pointer grow'>
            <img src='/assets/images/gcloud.png' alt='Google Cloud Functions' />
          </div>    
          <div className='w3 mh4 pv2 pv3-m pb0-l dim pointer grow'>
            <img src='/assets/images/azure.svg' alt='Microsoft Azure Functions' />
          </div>    
          <div className='w3 mh4 pv2 pv3-m pb0-l dim pointer grow'>
            <img src='/assets/images/html5.svg' alt='Html 5' />
          </div>   
          <div className='w3 mh4 pv2 pv3-m pb0-l ph3 ph1-l dim pointer grow'>
            <img src='/assets/images/css.svg' alt='CSS' />
          </div>    
          <div className='w3 mh4 pv2 pv3-m pb0-l dim pointer grow'>
            <img src='/assets/images/node.png' alt='Node JS' />
          </div>    

        </div>
      </div>



      <section 
        className='sans-serif relative cover bg-left bg-center-l' 
        style={{
          backgroundImage: 'url(http://mrmrs.io/photos/u/011.jpg)'
        }}>

        <div className='pa4 bg-black-80' >
          <div className='tc' >
              <h2 className='f2-l f2i-m f3 ttu tracked white'>Want to grab a coffee or meet?</h2>
              <div className='ph3 ph4-ns bt b--black-10 black-70'>
                <a href='mailto:hello@codepreneur.io' className='link b f3 f2-ns dim white lh-solid'>hello@codepreneur.io</a>
              </div>

             
          </div>
        </div>
      </section>


      <section className='sans-serif cf mt5 pv5 bt b--black-05 ph6-l'>
        <h1 className='tc f5 ttu fw6 tracked mb4 avenir'>Other Projects (Coming Soon)</h1>
        <a href='#0' className='fl w-third w-25-ns border-box overflow-hidden ba bw2 white' title=''>
          <div 
            className='grow cover bg-center pv5 pv6-l'
            style={{
              backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/prnt/hw-080411-cargo_960.jpg)'
            }}></div>
        </a>
        <a href='#0' className='fl w-third w-25-ns border-box overflow-hidden  ba bw2 white' title=''>
          <div 
            className='grow cover bg-top pv5 pv6-l' 
            style={{
              backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/prnt/hwspringtour-cargo_960-1.jpg)'
            }}></div>
        </a>
        <a href='#0' className='fl w-third w-25-ns border-box overflow-hidden ba bw2 white' title=''>
          <div 
            className='grow cover bg-top pv5 pv6-l' 
            style={{
              backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/prnt/cc010611.s_960.jpg)'
            }}></div>
        </a>
        <a href='#0' className='fl w-100 w-25-ns border-box overflow-hidden ba bw2 white' title=''>
          <div 
            className='grow cover bg-top pv5 pv6-l' 
            style={{
              backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/prnt/adam-stern-031209_960-2.jpg)'
            }}></div>
        </a>
        <a href='#0' className='fl w-50 border-box overflow-hidden ba bw2 white' title=''>
          <div 
            className='grow cover bg-center pv5 pv7-l' 
            style={{
              backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/prnt/zh170311.4.cargo_960.jpg)'
            }}></div>
        </a>
        <a href='#0' className='fl w-50 border-box overflow-hidden ba bw2 white' title=''>
          <div 
            className='grow cover bg-center pv5 pv7-l' 
            style={{
              backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/prnt/hw090911_960.jpg)'
            }}></div>
        </a>
      </section>



      <div className='pa4 sans-serif mw8 center ph6-l ph4 pt3'>
        <blockquote className='athelas ml0 mt0 pl4 black-90 bl bw2 b--blue'>
          <p className='f5 f4-m f3-l lh-copy measure mt0'>
            Vaidas has a wealth of knowledge and is always pushing to go the extra mile, working closely together has truly been a pleasure. As a javascript developer Vaidas is always striving for perfection, his serverless approach means this can be done at the utmost speed and at a fraction of a cost. <br /> <br />

            He has many skills - clear communicator and excellent at collaborating with others; passionate about producing beautiful, scalable products; and always up to date with trends and technology. <br />
            Vaidas is the kind of developer any company would be lucky to work with.
          </p>
          <cite className='f6 ttu tracked fs-normal'>James Ciclitira, Digital Product Designer and Web Developer</cite>
        </blockquote>
      </div>     

    </Page>
  )
}

export default Homepage

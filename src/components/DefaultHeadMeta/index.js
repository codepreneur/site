import React, { PropTypes } from "react"
import Helmet from "react-helmet"

const DefaultHeadMeta = (props, { metadata: { pkg } }) => (
  <div hidden>
    <Helmet
      meta={ [
        {
          name: "generator", content: `${ process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
        },
        { property: "og:site_name", content: pkg.name },
        { name: "twitter:site", content: `@${ pkg.twitter }` },
        ...props.meta ? props.meta : [],
      ] }
      script={ [
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js" },
        ...props.scripts ? props.scripts : [],
      ] }
    />

    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={ [ {
        name: "viewport", content: "width=device-width, initial-scale=1",
      } ] }
      link={ [ 
        {
        rel: "stylesheet", href: "https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css",
        },        
        {
          rel: "stylesheet", href: "/assets/css/style.css",
        },
        {
          rel: "shortcut icon", href: "/assets/fav/favicon.ico",
        },         
        {
          rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/fav/favicon-16x16.png",
        },        
        {
          rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/fav/favicon-32x32.png",
        }
      ] }

    />
    <style>{ "@-ms-viewport { width: device-width; }" }</style>
  </div>
)

DefaultHeadMeta.propTypes = {
  meta: React.PropTypes.arrayOf(React.PropTypes.object),
  scripts: React.PropTypes.arrayOf(React.PropTypes.object),
}

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta
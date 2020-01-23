function register ({ peertubeHelpers }) {
  peertubeHelpers.getSettings().then(
    s => {
      if ( !s ) {
        return
      }
      if ( s['icon_url'] ) {
        const baseStaticUrl = peertubeHelpers.getBaseStaticRoute()
        const imageUrl = baseStaticUrl + '/images/BitTube-logo.svg';
        const faviconUrl = baseStaticUrl + '/favicon.svg';

        // Check if it's standard logo saved on static directory
        if(s['icon_url'].toLowerCase() == 'bittube'){
          s['icon_url'] = imageUrl;
        }
        // Check if it's standard favicon saved on static directory
        if(s['favicon_url'].toLowerCase() == 'bittube'){
          s['favicon_url'] = faviconUrl;
        }

        const style = document.createElement('style')
        document.head.appendChild(style)
        const sheet = style.sheet
        let rule = "#custom-css .icon.icon-logo { "
        rule+= " display: inline-block; "
        rule+= " background: url('"+s['icon_url']+"'); "
        if ( s['icon_width'] ) {
          rule+= " width: "+s['icon_width']+"; "
        }
        if( s['additional_css'] ){
          rule+= " " + s['additional_css'] + " "
        }
        rule+= " }"
        sheet.insertRule(rule, 0)
      }
      if ( s['favicon_url']) {
        const favicon = document.querySelector('link[rel="icon"]')
        favicon.href = s['favicon_url']
      }
    }
  )
}

export {
  register
}

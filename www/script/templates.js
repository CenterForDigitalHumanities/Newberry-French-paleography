var NL = new Map()

NL.set("USER", "http://paleo.rerum.io/TPEN-NL/geti")
NL.set("AUTH", "http://paleo.rerum.io/TPEN-NL/login")

let header = document.createElement('template')
let footer = document.createElement('template')
header.innerHTML = `
<header class="header clearfix">
      <div id="branding" class="branding-elements clearfix">
          <div style="margin: 0px auto;">
          <div class="newberry-header hiddem-sm hidden-xs">
              <a href="http://www.newberry.org/">
                <img alt="Newberry" src="/Newberry-French-paleography/www/images/NewberryLogo_with_tag.png">
              </a>
          </div>
          
          <h1 id="site-name"><a href="/Newberry-French-paleography/">French Renaissance 
          <div id="logo" style="display: inline;">
              <img aria-hidden="true" role="presentation" alt="" src="/Newberry-French-paleography/www/images/rp-logo.png">
          </div>
          <span class="red">Paleography</span></a>
          </h1>
          </div>

      </div>
      <div class="search-icon" id="search-btn"><button title="Search" aria-label="Search" class="icon icon-search"></button></div>
      <div class="hamburger-icon"><div class="icon icon-menu">&nbsp;</div></div>
</header>
<link rel="stylesheet" href="/Newberry-French-paleography/www/css/style.css">
<slot></slot>

<nav class="container">
    <ul class="nav nav-bar"><li class="first leaf"><a href="/Newberry-French-paleography/">Home</a></li>
        <li class="leaf active-trail active"><a href="/Newberry-French-paleography/www/manuscripts.html" title="" class="active-trail active">Manuscripts</a></li>
        <li class="leaf"><a href="/Newberry-French-paleography/search" title="">Search</a></li>
        <li class="expanded dropdown"><a href="/Newberry-French-paleography/resources" title="" data-target="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Resources <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li class="first leaf"><a href="/Newberry-French-paleography/essays" title="">Background Essays</a></li>
                <li class="leaf"><a href="/Newberry-French-paleography/transcriptions" title="">Partial Transcriptions</a></li>
                <li class="leaf"><a href="/Newberry-French-paleography/www/calligraphy.html" title="">Calligraphy Books</a></li>
                <li class="leaf"><a href="/Newberry-French-paleography/www/maps.html" title="">Historical Maps</a></li>
                <li class="leaf"><a href="/Newberry-French-paleography/interactive-map">Interactive Map</a></li>
                <li class="leaf"><a href="/Newberry-French-paleography/scripts">French Scripts and Hands</a></li>
                <li class="leaf"><a href="/Newberry-French-paleography/about-french-documents">About French Documents</a></li>
                <li class="leaf"><a href="/Newberry-French-paleography/manuscript-preservation">Manuscript Preservation</a></li>
                <li class="leaf"><a href="/Newberry-French-paleography/transcribing-editing-conventions">Transcribing &amp; Editing Conventions</a></li>
                <li class="leaf"><a href="/Newberry-French-paleography/teaching">Teaching</a></li>
                <li class="leaf"><a href="/Newberry-French-paleography/group-work">Group Work</a></li>
                <li class="last leaf"><a href="/Newberry-French-paleography/get-started">Get Started</a></li>
            </ul>
        </li>
        <li class="expanded dropdown"><a href="/Newberry-French-paleography/reference" data-target="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Reference <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li class="first leaf"><a href="/Newberry-French-paleography/abbreviations">Abbreviations</a></li>
                <li class="leaf"><a href="/Newberry-French-paleography/selected-french-dictionaries">Dictionaries</a></li>
                <li class="leaf"><a href="/Newberry-French-paleography/glossary-of-terms">Glossary</a></li>
                <li class="leaf"><a href="/Newberry-French-paleography/french-institutions">French Institutions</a></li>
                <li class="last leaf"><a href="/Newberry-French-paleography/other-reference-resources">Other Reference Resources</a></li>
            </ul>
        </li>
        <li class="expanded dropdown"><a href="/Newberry-French-paleography/contact" title="" data-target="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Contact <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li class="first leaf"><a href="/Newberry-French-paleography/about-team" title="">About the Team</a></li>
                <li class="last leaf"><a href="/Newberry-French-paleography/contributing-institutions" title="">Contributing Institutions</a></li>
            </ul>
        </li>
        <li class="expanded dropdown"><a title="" data-target="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Transcriptions <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li class="first leaf"><a href="http://paleo.rerum.io/TPEN-NL/my_transcriptions.html" title="">My Transcriptions</a></li>
                <li class="last leaf"><a href="/Newberry-French-paleography/transcriptions" title="">Master Transcriptions</a></li>
            </ul>
        </li>
        <li class="last leaf"><a href="http://paleo.rerum.io/TPEN-NL/logout.html" title="">Logout</a></li>
    </ul>
</nav>
`

footer.innerHTML = `
<link rel="stylesheet" href="/Newberry-French-paleography/css/style.css">
<div class="row container">
    <div class="col" style="flex-grow:2;">
        <h2> Partners </h2>
            <div class="row">
                <a class="col" href="http://www.newberry.org/" target="_blank"><img alt="Newberry" src="/Newberry-French-paleography/www/images/NewberryLogo_with_tag.png"></a>
                <a class="col" href="http://onesearch.library.utoronto.ca" target="_blank"><img alt="University of Toronto Libraries" src="/Newberry-French-paleography/www/images/UTL-logo.png"></a>
            </div>
            <div class="row">
                <a class="col" href="http://lib.slu.edu/" style="line-height: 23.1111px;" target="_blank"><img alt="St. Louis University" src="/Newberry-French-paleography/www/images/slu.gif" style="width: 346px;"></a>
                <a class="col" href="http://www.itergateway.org/" target="_blank"><img alt="Iter" src="/Newberry-French-paleography/www/images/iter-logo-new.png"></a>
            </div>
    </div>
    <div class="col">
        <slot></slot>
        <h2 class="pane-title"> Contact </h2>
        <p><a href="/Newberry-French-paleography/contact">Contact</a><br><a href="/Newberry-French-paleography/about-team">About the Team</a><br><a href="/Newberry-French-paleography/contact">Terms of Use</a></p>
        <p>Supported by a grant from The Andrew W. Mellon Foundation</p>
        <p><a href="http://creativecommons.org/licenses/by-nc-nd/4.0/" rel="license"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" style="border-width:0"></a><br><a href="https://www.newberry.org/paleography">French Renaissance Paleography</a> is licensed under a <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/" rel="license">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.</p>
    </div>
</div> `

NL.set("HEADER_TEMPLATE", header)
NL.set("FOOTER_TEMPLATE", footer)

class NlHeader extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(NL.get("HEADER_TEMPLATE").content.cloneNode(true))
    }
    // connectedCallback() {
    //     super.connectedCallback && super.connectedCallback()
    //     fetch(NL.get("USER"))
    //     .then(response => { if (!response.ok) { throw new Error(response.status) } return response })
    //     .then( response=>response.json())
    //     .then( user => alert(JSON.stringify(user)))
    //     .catch(err=>{
    //         if (err.message > 400) {
    //             fetch(NL.get("AUTH"),{
    //                 method:"POST",
    //                 mode: 'cors',
    //                 headers:{'Content-Type': 'application/json;charset=utf-8'},
    //                 referrerPolicy: 'no-referrer',
    //                 body: JSON.stringify({mail:"bhaberbe@slu.edu",password:3})
    //             })
    //         }
    //     })
    // }
}
customElements.get('nl-header') || customElements.define('nl-header', NlHeader)

class NlFooter extends HTMLElement {
    constructor() {
        super()       
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(NL.get("FOOTER_TEMPLATE").content.cloneNode(true))
    }
}
customElements.get('nl-footer') || customElements.define('nl-footer', NlFooter)

document.querySelector("header").replaceWith(document.createElement("nl-header"))
document.querySelector("footer").replaceWith(document.createElement("nl-footer"))

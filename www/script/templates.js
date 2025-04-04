var NL = new Map()

NL.set("USER", "http://newberry.t-pen.org/paleography/geti")
NL.set("AUTH", "http://newberry.t-pen.org/paleography/login")

let header = document.createElement('template')
let footer = document.createElement('template')
header.innerHTML = `
<header class="header clearfix">
      <div id="branding" class="branding-elements clearfix">
          <div style="margin: 0px auto;">
          <div class="newberry-header hiddem-sm hidden-xs">
              <a href="http://www.newberry.org/">
                <img alt="Newberry" src="https://french.newberry.t-pen.org/www/images/Logo-Newberry-horiz-BW.jpg">
              </a>
          </div>
          
          <h1 id="site-name"><a href="https://french.newberry.t-pen.org/">French Renaissance 
          <div id="logo" style="display: inline;">
              <img aria-hidden="true" role="presentation" alt="" src="https://french.newberry.t-pen.org/www/images/rp-logo.png">
          </div>
          <span class="red">Paleography</span></a>
          </h1>
          </div>

      </div>
</header>
<link rel="stylesheet" href="https://french.newberry.t-pen.org/www/css/style.css">
<slot></slot>

<nav class="container">
    <ul class="nav nav-bar"><li class="first leaf"><a href="https://french.newberry.t-pen.org/">Home</a></li>
        <li class="leaf active-trail active"><a href="https://french.newberry.t-pen.org/www/manuscripts.html" title="" class="active-trail active">Manuscripts</a></li>
        <li class="expanded dropdown"><a href="https://french.newberry.t-pen.org/resources" title="" data-target="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Resources <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li class="first leaf"><a href="https://french.newberry.t-pen.org/essays" title="">Background Essays</a></li>
                <li class="leaf"><a href="https://french.newberry.t-pen.org/transcriptions" title="">Partial Transcriptions</a></li>
                <li class="leaf"><a href="https://french.newberry.t-pen.org/www/calligraphy.html" title="">Calligraphy Books</a></li>
                <li class="leaf"><a href="https://french.newberry.t-pen.org/www/maps.html" title="">Historical Maps</a></li>
                <li class="leaf"><a href="https://french.newberry.t-pen.org/map">Interactive Map</a></li>
                <li class="leaf"><a href="https://french.newberry.t-pen.org/scripts">French Scripts and Hands</a></li>
                <li class="leaf"><a href="https://french.newberry.t-pen.org/about-french-documents">About French Documents</a></li>
                <li class="leaf"><a href="https://french.newberry.t-pen.org/manuscript-preservation">Manuscript Preservation</a></li>
                <li class="leaf"><a href="https://french.newberry.t-pen.org/conventions">Transcribing &amp; Editing Conventions</a></li>
                <li class="leaf"><a href="https://french.newberry.t-pen.org/teaching">Teaching</a></li>
                <li class="leaf"><a href="https://french.newberry.t-pen.org/group-work">Group Work</a></li>
                <li class="last leaf"><a href="https://french.newberry.t-pen.org/get-started">Get Started</a></li>
            </ul>
        </li>
        <li class="expanded dropdown"><a href="https://french.newberry.t-pen.org/reference" data-target="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Reference <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li class="first leaf"><a href="https://french.newberry.t-pen.org/abbreviations">Abbreviations</a></li>
                <li class="leaf"><a href="https://french.newberry.t-pen.org/dictionaries">Dictionaries</a></li>
                <li class="leaf"><a href="https://french.newberry.t-pen.org/glossary">Glossary</a></li>
                <li class="leaf"><a href="https://french.newberry.t-pen.org/institutions">French Institutions</a></li>
                <li class="last leaf"><a href="https://french.newberry.t-pen.org/reference-resources">Other Reference Resources</a></li>
            </ul>
        </li>
        <li class="expanded dropdown"><a href="https://french.newberry.t-pen.org/contact" title="" data-target="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Contact <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li class="first leaf"><a href="https://french.newberry.t-pen.org/about-team" title="">About the Team</a></li>
                <li class="last leaf"><a href="https://french.newberry.t-pen.org/contributing-institutions" title="">Contributing Institutions</a></li>
            </ul>
        </li>
        <li class="expanded dropdown"><a title="" data-target="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Transcriptions <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li class="first leaf"><a href="http://newberry.t-pen.org/paleography/my-transcriptions.html?language=French" title="">My Transcriptions</a></li>
                <li class="last leaf"><a href="https://french.newberry.t-pen.org/transcriptions" title="">Master Transcriptions</a></li>
            </ul>
        </li>
        <li>
            <a class="loginToTpen" href="https://newberry.t-pen.org/paleography/login.jsp">
              Login
            </a>
        </li>
    </ul>
</nav>
`

footer.innerHTML = `
<link rel="stylesheet" href="https://french.newberry.t-pen.org/www/css/style.css">
<div class="row no-embed">
    <div class="col">
        <h2> Partners </h2>
            <div class="row">
                <a class="col" href="http://www.newberry.org/" target="_blank"><img alt="Newberry" src="https://french.newberry.t-pen.org/www/images/Logo-Newberry-horiz-BW.jpg"></a>
                <a class="col" href="http://onesearch.library.utoronto.ca" target="_blank"><img alt="University of Toronto Libraries" src="https://french.newberry.t-pen.org/www/images/UTL-logo.png"></a>
            </div>
            <div class="row">
                <a class="col" href="http://lib.slu.edu/" style="line-height: 23.1111px;" target="_blank"><img alt="St. Louis University" src="https://centerfordigitalhumanities.github.io/Newberry-paleography/images/slu_ovpr.png" style="width: 470px;"></a>
                <a class="col" href="http://www.itergateway.org/" target="_blank"><img alt="Iter" src="https://french.newberry.t-pen.org/www/images/iter-logo-new.png"></a>
            </div>
    </div>
    <div class="col">
        <slot></slot>
        <h2 class="pane-title"> Contact </h2>
        <p><a href="https://french.newberry.t-pen.org/contact">Contact</a><br><a href="https://french.newberry.t-pen.org/about-team">About the Team</a><br><a href="https://french.newberry.t-pen.org/contact">Terms of Use</a></p>
        <p>Supported by a grant from The Andrew W. Mellon Foundation</p>
        <p><a href="http://creativecommons.org/licenses/by-nc-nd/4.0/" rel="license"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" style="width:88px"></a><br><a href="https://www.newberry.org/paleography">French Renaissance Paleography</a> is licensed under a <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/" rel="license">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.</p>
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

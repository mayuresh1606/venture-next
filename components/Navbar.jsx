import Link from "next/link"
export default function Navbar() {
    return <header>
      <nav className="navbar">
        <div className="nav-contents">
          <div style={{"textAlign":"center"}} className="site-logo">
            <h1 className="venture-logo">VENTURE WORLD</h1>
            <h6 className="venture-logo-desc">Tour, Trek, Picnic, Pilgrimage</h6>
          </div>
          <div className="site-navigations">
            <ul className="ul">
              <li className="ul-background">
                <Link className="nav-link darkblue-color" aria-current="page" href="/">Home</Link>
              </li>
              <li className="ul-background">
                <a className="nav-link darkblue-color" href="/tours">Tours</a>
              </li>
              <li className="ul-background">
                <a className="nav-link darkblue-color" href="/services">Services</a>
              </li>
              <li className="ul-background">
                <a className="nav-link darkblue-color" href="/contactUs">Contact Us</a>
              </li>
              <li className="ul-background">
                <a className="nav-link darkblue-color" href="/terms">Terms</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
}
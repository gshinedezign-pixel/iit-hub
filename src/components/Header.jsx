import { Link } from 'react-router-dom'
import CartIcon from './icons/CartIcon'
import SearchIcon from './icons/SearchIcon'
import UserIcon from './icons/UserIcon'
import PhoneIcon from './icons/PhoneIcon'

const Header = () => {
  return (
    <header>
      <div className="topbar bg-dark text-white py-1">
        <div className="container d-flex justify-content-between small">
          <div>Welcome to our store — Free shipping on orders over $50</div>
          <div>
            <a className="text-white me-3" href="#">FAQs</a>
            <a className="text-white" href="/contact">Contact us</a>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src="/vite.svg" alt="logo" style={{ width: 44, height: 44 }} />
            <span className="ms-2 fw-bold">IIT Hub</span>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="catalogDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catalog</a>
                <ul className="dropdown-menu" aria-labelledby="catalogDropdown">
                  <li><Link className="dropdown-item" to="/catalog">All Products</Link></li>
                  <li><Link className="dropdown-item" to="/hot">Hot</Link></li>
                  <li><Link className="dropdown-item" to="/sale">Sale</Link></li>
                </ul>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/inspires">Inspires</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/support">Support</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/theme-features">Theme Features</Link></li>
            </ul>

            <div className="d-flex align-items-center">
              <form className="d-flex me-3" role="search" onSubmit={(e)=>e.preventDefault()}>
                <div className="input-group">
                  <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-secondary" type="submit"><SearchIcon /></button>
                </div>
              </form>

              <a className="me-3 text-muted" href="#"><PhoneIcon /></a>
              <a className="me-3 text-muted" href="#"><UserIcon /></a>
              <a className="text-muted" href="#"><CartIcon /></a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

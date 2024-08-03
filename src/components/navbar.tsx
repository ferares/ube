import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

import '@/styles/navbar.css'

const links = [
  {
    label: 'Usuario',
    href: '/user',
  }
]

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__content content'>
        <h1 className='navbar__title'>
          <FontAwesomeIcon icon={faBookmark} />
          Diccionario Urbano
        </h1>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
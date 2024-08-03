import '@/styles/footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__content content'>
        <span className='footer__text'>
          Desarrollado por&nbsp;
          <br className='footer__mobile-break' />
          <a className='footer__link' href='https://github.com/ferares' target='_blank' rel='noreferrer noopener nofollow'>Fermín Ares</a>
          &nbsp;y&nbsp;
          <a className='footer__link' href='https://www.linkedin.com/in/luciayarzabalgutierrez/' target='_blank' rel='noreferrer noopener nofollow'>
            Lucía Yarzábal
          </a>
          <br />
          La Paloma, Rocha, Uruguay
        </span>
        <span className='footer__text'>
          Código abierto en&nbsp;
          <a className='footer__link' href='https://github.com/ferares/'>
            GitHub
          </a>
        </span>
      </div>
    </footer>
  )
}
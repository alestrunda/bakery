import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const PageMenu = ({ data }) => (
  <div className="section-content container">
    <Helmet title="Menu" />

    <h1 className="heading-main-single">Menu</h1>
    <p>Sed ullamcorper ac eros in maximus. Nam quis magna fringilla, volutpat quam in, eleifend quam. Integer bibendum odio sit amet lectus rhoncus, et hendrerit diam facilisis. Integer ultrices elit sit amet magna laoreet, vel sodales dolor sollicitudin. Sed ultricies aliquet egestas. Proin at risus eget nulla ullamcorper scelerisque.</p>
    <ul>
      <li>Quisque tempus</li>
      <li>Magna eget</li>
      <li>Eros posuere</li>
      <li>Sed ac faucibus neque</li>
      <li>Cras</li>
      <li>Maecenas</li>
      <li>Etiam eget</li>
      <li>Nunc sagittis</li>
    </ul>
  </div>
)

export default PageMenu

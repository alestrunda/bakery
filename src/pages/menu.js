import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import HeadingMain from '../components/HeadingMain'
import PriceItem from '../components/PriceItem'

class PageMenu extends React.Component {
  renderMenuItems(array) {
    return array.map((item, index) => (
      <PriceItem key={index} title={item.title} price={item.price} />
    ))
  }

  render() {
    const itemsFood = [
      {
        title: 'Quisque tempus',
        price: '$12.<small class="vertical-top">00</small>',
      },
      {
        title: 'Magna eget',
        price: '$29.<small class="vertical-top">00</small>',
      },
      {
        title: 'Eros posuere',
        price: '$50.<small class="vertical-top">00</small>',
      },
      {
        title: 'Sed ac faucibus neque',
        price: '$99.<small class="vertical-top">00</small>',
      },
      { title: 'Cras', price: '$27.<small class="vertical-top">00</small>' },
      { title: 'Maecenas', price: '$1.<small class="vertical-top">99</small>' },
      {
        title: 'Etiam eget',
        price: '$199.<small class="vertical-top">00</small>',
      },
      {
        title: 'Nunc sagittis',
        price: '$69.<small class="vertical-top">00</small>',
      },
    ]
    const itemsDrinks = [
      {
        title: 'Nunc sagittis',
        price: '$69.<small class="vertical-top">00</small>',
      },
      {
        title: 'Quisque tempus',
        price: '$12.<small class="vertical-top">00</small>',
      },
      {
        title: 'Magna eget',
        price: '$29.<small class="vertical-top">00</small>',
      },
      {
        title: 'Eros posuere',
        price: '$50.<small class="vertical-top">00</small>',
      },
      {
        title: 'Sed ac faucibus neque',
        price: '$99.<small class="vertical-top">00</small>',
      },
      { title: 'Cras', price: '$27.<small class="vertical-top">00</small>' },
      { title: 'Maecenas', price: '$1.<small class="vertical-top">99</small>' },
      {
        title: 'Etiam eget',
        price: '$199.<small class="vertical-top">00</small>',
      },
    ]

    return (
      <div>
        <Helmet title="Menu" />
        <HeadingMain title="Menu" />

        <div className="section-content section-content--top-smaller container">
          <div className="article article--headings-center text-center">
            <h1>Sed ultricies aliquet</h1>
            <p>
              Sed ullamcorper ac eros in maximus. Nam quis magna fringilla,
              volutpat quam in, eleifend quam. Integer bibendum odio sit amet
              lectus rhoncus, et hendrerit diam facilisis. Integer ultrices elit
              sit amet magna laoreet, vel sodales dolor sollicitudin. Sed
              ultricies aliquet egestas. Proin at risus eget nulla ullamcorper
              scelerisque.
            </p>
            <div className="grid grid--xhuge mt45">
              <div className="grid__item grid__item--lg-span-6">
                <h3>Food</h3>
                {this.renderMenuItems(itemsFood)}
              </div>
              <div className="grid__item grid__item--lg-span-6 grid__item--break-md-35">
                <h3>Drinks</h3>
                {this.renderMenuItems(itemsDrinks)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageMenu

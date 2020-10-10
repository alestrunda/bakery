import React from 'react'

import HeadingMain from '../components/HeadingMain'
import PriceItem from '../components/PriceItem'
import Layout from '../layouts/Page'

import drinks from '../data/drinks'
import food from '../data/food'

const PAGE_TITLE = 'Menu'

class PageMenu extends React.Component {
  renderMenuItems(array) {
    return array.map((item, index) => (
      <PriceItem key={index} title={item.title} price={item.price} />
    ))
  }

  render() {
    return (
      <Layout title={PAGE_TITLE}>
        <HeadingMain title={PAGE_TITLE} />
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
                {this.renderMenuItems(food)}
              </div>
              <div className="grid__item grid__item--lg-span-6 grid__item--break-md-35">
                <h3>Drinks</h3>
                {this.renderMenuItems(drinks)}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PageMenu

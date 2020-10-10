import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import ContactMap from '../containers/ContactMap'
import HeadingMain from '../components/HeadingMain'
import Layout from '../layouts/Page'

const PAGE_TITLE = 'About'

const PageAbout = ({ data }) => (
  <Layout>
    <Helmet title={PAGE_TITLE} />
    <HeadingMain title={PAGE_TITLE} />

    <div className="section-content section-content--top-smaller container">
      <div className="article lists-dots">
        <h1>Integer ornare</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas,
          lorem non mattis ullamcorper, enim eros consectetur ligula, id
          malesuada sem magna non felis. Suspendisse luctus ut tortor eget
          sollicitudin. Morbi venenatis semper est at venenatis. Integer ornare
          velit eget hendrerit scelerisque. Nullam ullamcorper cursus nisi eget
          fermentum.
          <br />
          Curabitur pulvinar scelerisque libero, sed posuere mi finibus eget.
          Cras dignissim blandit viverra. Duis convallis mauris dictum placerat
          varius.
        </p>
        <h3>Pellentesque</h3>
        <div className="grid">
          <div className="grid__item grid__item--lg-span-6">
            <p>
              Nullam suscipit quam eget nisl ultricies lacinia non sed neque.
              Etiam mollis rhoncus libero eget auctor. In sed mollis diam, et
              cursus erat. Pellentesque eu sapien non nunc ornare tincidunt eget
              in leo. Vestibulum imperdiet augue id neque elementum, molestie
              suscipit nibh faucibus. In consequat mauris ut tristique vehicula.
              Pellentesque facilisis urna leo, in vehicula nisi laoreet in.
            </p>
          </div>
          <div className="grid__item grid__item--lg-span-6">
            <p>
              Morbi ullamcorper, neque vitae placerat eleifend, turpis tortor
              fermentum odio, a pharetra mauris neque et nisi. Suspendisse
              potenti. Nullam malesuada elit leo, et accumsan felis sollicitudin
              pellentesque. Suspendisse ut odio turpis. Proin finibus faucibus
              condimentum. Proin nec elementum urna. Nullam euismod felis id leo
              imperdiet, et fringilla felis maximus. Maecenas enim sem, rhoncus
              vitae lectus porttitor, pulvinar viverra ligula.
            </p>
          </div>
        </div>
        <img
          className="img-responsive el-center mb35 mt20"
          src={require('../../assets/about.jpg')}
          alt="slide"
        />
        <h3>Pellentesque</h3>
        <p>
          <strong>
            Sed quis quam eros. Donec ac eros non elit blandit tincidunt ac ut
            orci.
          </strong>
        </p>
        <ul>
          <li>Donec ac eros non elit</li>
          <li>Suspendisse ut odio turpis</li>
          <li>
            Proin nec elementum urna. Nullam euismod felis id leo imperdiet, et
            fringilla felis maximus.
          </li>
          <li>Maecenas enim</li>
        </ul>
        <p>
          Quisque sed est dapibus, convallis mauris eget, molestie elit.
          Praesent congue neque vitae ante scelerisque venenatis. Morbi eget
          felis lacus. Sed quis quam eros. Donec ac eros non elit blandit
          tincidunt ac ut orci. Sed sed ultricies tellus, non facilisis metus.
          Duis mollis tellus at feugiat rutrum. Aenean nec quam sit amet leo
          tristique malesuada in eget nisl. Ut sem sapien, placerat at maximus
          ut, egestas ut ante.
        </p>
      </div>
    </div>

    <ContactMap />
  </Layout>
)

export default PageAbout

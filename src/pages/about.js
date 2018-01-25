import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const PageAbout = ({ data }) => (
  <div className="section-content container">
    <Helmet title="About" />

    <h1 className="heading-main-single">About</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, lorem non mattis ullamcorper, enim eros consectetur ligula, id malesuada sem magna non felis. Suspendisse luctus ut tortor eget sollicitudin. Morbi venenatis semper est at venenatis. Integer ornare velit eget hendrerit scelerisque. Nullam ullamcorper cursus nisi eget fermentum. Curabitur pulvinar scelerisque libero, sed posuere mi finibus eget. Cras dignissim blandit viverra. Duis convallis mauris dictum placerat varius.</p>
    <div className="grid">
      <div className="grid__item grid__item--lg-span-6">
        <p>Nullam suscipit quam eget nisl ultricies lacinia non sed neque. Etiam mollis rhoncus libero eget auctor. In sed mollis diam, et cursus erat. Pellentesque eu sapien non nunc ornare tincidunt eget in leo. Vestibulum imperdiet augue id neque elementum, molestie suscipit nibh faucibus. In consequat mauris ut tristique vehicula. Pellentesque facilisis urna leo, in vehicula nisi laoreet in.</p>
      </div>
      <div className="grid__item grid__item--lg-span-6">
        <p>Morbi ullamcorper, neque vitae placerat eleifend, turpis tortor fermentum odio, a pharetra mauris neque et nisi. Suspendisse potenti. Nullam malesuada elit leo, et accumsan felis sollicitudin pellentesque. Suspendisse ut odio turpis. Proin finibus faucibus condimentum. Proin nec elementum urna. Nullam euismod felis id leo imperdiet, et fringilla felis maximus. Maecenas enim sem, rhoncus vitae lectus porttitor, pulvinar viverra ligula.</p>
      </div>
    </div>
    <p>Quisque sed est dapibus, convallis mauris eget, molestie elit. Praesent congue neque vitae ante scelerisque venenatis. Morbi eget felis lacus. Sed quis quam eros. Donec ac eros non elit blandit tincidunt ac ut orci. Sed sed ultricies tellus, non facilisis metus. Duis mollis tellus at feugiat rutrum. Aenean nec quam sit amet leo tristique malesuada in eget nisl. Ut sem sapien, placerat at maximus ut, egestas ut ante.</p>
  </div>
)

export default PageAbout

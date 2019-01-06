import React from 'react'
import Layout from '../components/layout'
import Social from '../components/social'

const IndexPage = () => (
  <Layout>
    <div className="w-60 flex">
      <div className="ph4">
        <img
          className="br2 grow shadow-2 h5 w-100 h-auto mw9 nrotate-4 mb4"
          src="https://uploads.codesandbox.io/uploads/user/ee8a01b8-d3d2-490e-8523-f5abe4a8b6d3/sZDd-daniel-wirtz.jpeg"
          alt=""
        />
        <Social link="twitter.com/wirtzdan" icon="twitter" />
        <Social link="github.com/wirtzdan" icon="github" />
        <Social link="medium.com/@wirtzdan" icon="medium" />
      </div>
      <div className="ph4">
        <h1 className="eczar fw5 f-title lh-solid">
          My name is Daniel. I like
          <span className="gold"> building stuff</span>, cooking and Bonsai.
        </h1>
        <p className="">
          Cursus eget enim malesuada lacinia sed a congue commodo, sollicitudin
          purus ultrices laoreet neque magnis praesent, scelerisque orci sit
          lacus dolor cras montes. Dignissim porttitor condimentum a tortor dis
          vulputate senectus nunc, morbi ante purus sed mi lobortis posuere
          integer, faucibus dui montes class dapibus eros odio. Lacus maecenas
          elit vestibulum volutpat in condimentum ipsum quisque, placerat a
          turpis quis.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage

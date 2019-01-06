import React from 'react'

function Social(props) {
  return (
    <div className="grow flex items-center">
      <img className="w2" src="../assets/github-outline.svg" alt="" />
      <a className="no-underline special-underline mv2 mid-gray" href="#">
        {props.link}
      </a>
    </div>
  )
}

export default Social

import React from 'react'
import { Helmet } from 'react-helmet'
import TopNav from '../../components/TopNav'

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <tiltle>First Orbit</tiltle>
      </Helmet>
      <TopNav/>
    </div>
  )
}

export default HomePage

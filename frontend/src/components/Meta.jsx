import React from 'react'
import {Helmet} from 'react-helmet-async'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta naem='keywords' content={keywords}/>
    </Helmet>
  )
}

Meta.defaultProps = {
    title: "Welcome to PointShop",
    description: "The place where you can buy all the products you need",
    keywords: "eletronics, buy electronics, cheap electronics",
};

export default Meta
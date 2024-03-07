import { Flex } from 'antd';
import React from 'react'
import Banner from './Banner';
import ProductsLists from './ProductsLists';
import SellerLists from './SellerLists';

const MainContent = () => {
  return (
    <div style={{flex: 1}}>
        <Flex vertical gap="2.3rem">
            <Banner />
            <ProductsLists />
            <SellerLists />
</Flex>
    </div>




  )
}

export default MainContent;
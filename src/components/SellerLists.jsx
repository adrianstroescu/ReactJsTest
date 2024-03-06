import { Flex, Typography, Button } from 'antd';
import React from 'react'

function SellerLists() {
  return (
    <Flex align='center' justify='space-between' gap='large'>
        <Flex gap='small' className='top-seller'>
            <Flex align='center' justify='space-between'>
            <Typography.Title level={5} strong className='primay--color'>Top Seller</Typography.Title>
            <Button type='link' className='gray--color'>View All</Button>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default SellerLists;
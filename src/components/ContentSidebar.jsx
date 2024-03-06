import { Card, Flex, Typography, Image } from 'antd';
import React from 'react'
import plant  from '../assets/plant01.png';

function ContentSidebar() {
  return (
    <>
    <Card className='card'>
        <Flex vertical gap="large">
            <Typography.Title  level={4} strong>Today <br/> 5 orders</Typography.Title>
            <Typography.Title  level={4} strong>This Month <br/> 120 orders</Typography.Title>
        </Flex>
        <Image src={plant} alt='plant' 
        style={{ 
            position: 'absolute', 
            bottom: -50,
            left: 150, 
            height: '200px',
            width: 'auto'
            }}></Image>
    </Card>

    </>
  )
}

export default ContentSidebar;
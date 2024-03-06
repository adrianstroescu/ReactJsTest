import { Card, Flex, Typography, Button} from 'antd';
import React from 'react'

const Banner = () => {
  return (
    <Card style={{height: 260, padding: '20px'}}>
        <Flex vertical gap="30px">
            <Flex vertical align='flex-start'>
                <Typography.Title level={2} strong>Create and sell Products</Typography.Title>
                <Typography.Text type='secondary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography.Text>
            </Flex>

            <Flex gap="large">
                <Button type="primary" size="large">Explore More</Button>
                <Button size='large'>Top Sellers</Button>
            </Flex>
        </Flex>
    </Card>    
  )
}

export default Banner;
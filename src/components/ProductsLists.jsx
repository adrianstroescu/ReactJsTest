import {Button, Card, Flex ,Typography, Image} from 'antd'
import plantData from '../plantData';
import React from 'react'


const {Meta} = Card;
const ProductsLists = () => {
  return (
    <div>
    <Flex align='center' justify='space-between'>
        <Typography.Title level={3}strong className='primary--color' >
            My Listings
        </Typography.Title>
        <Button type="link" className="gray--color">
            View All
        </Button>

    </Flex>

    <Flex align='center' gap="large">
        {plantData.map((plant) => (
            <Card key={plant.id} hoverable className='plant-card'>
                <Image src={plant.picture} style={{width: '130px', height: '140px'}} />
                <Meta title={plant.name} style={{marginTop: '1rem'}}/>
            </Card>
        ))}

    </Flex>
    </div>
  )
}

export default ProductsLists;
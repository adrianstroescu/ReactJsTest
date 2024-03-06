import { Flex,Typography, Button, List, Avatar } from 'antd';
import React from 'react'

const data=[
    {
        name:'John Brown',
        orderTime: 1,
    },
    {
        name: 'Jim Green',
        orderTime: 2,
    },
    {
        name: 'Joe Black',
        orderTime: 3,

    },
    {
        name:'Hohn Crown',
        orderTime: 4,

    },
    {
        name: 'Mic Zfack',
        orderTime: 5,

    },

]

const Activity = () => {
  return (
   <Flex vertical gap="small">
        <Flex  align='center' justify='space-between' gap='large'>
            <Typography.Title level={3}strong className='primary--color' >
                Recent Activity
            </Typography.Title>
            <Button type="link" className="gray--color">
                View All
            </Button>
        </Flex>

        <List 
        pagination 
        dataSource={data} 
        renderItem={(user, index) => (
            <List.Item>
                <List.Item.Meta 
                avatar={<Avatar src={'https://api.dicebear.com/7.x/miniavs/svg?seed=${index}'} />} 
                title={ <a href="#" >{user.name}</a>}
                description='Order a new plant'
                ></List.Item.Meta>
                <span className='gray--color'>
                    {user.orderTime}  {user.orderTime == 1 ? 'day ago' : 'days ago'}
                </span>
            </List.Item>
            )}

            
        />
   </Flex>
  )
}



export default Activity;
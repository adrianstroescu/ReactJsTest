import { Flex, Typography, Button, Card, Avatar, Tooltip, Divider,} from 'antd';
import avatarData from '../avatarData';
import React from 'react'

function SellerLists() {
  return (
    <Flex align='center' justify='space-between' gap='large'>
        <Flex vertical="row" gap='small' className='top-seller'>
            <Flex align='center' justify='space-between'>
            <Typography.Title level={5} strong className='primay--color'>Top Seller</Typography.Title>
            <Button type='link' className='gray--color'>View All</Button>
            </Flex>
            <Card>
              <Flex align='center' justify='space-evenly'>
                <Avatar.Group maxCount={5} maxPopoverTrigger='click' size="large" maxStyle={{color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'progress,'}}>
                {avatarData.map((avatar) => (
                        <Tooltip key={avatar.id} title={avatar.name} placement='top'>
                          <Avatar  src={avatar.picture} ></Avatar>
                        </Tooltip>
                        ))}
                </Avatar.Group>
                  <Divider type='vertical' className='divider'/>
                  <Flex vertical="row">
                  <Typography.Text type='secondary' strong>1,200 plant sold</Typography.Text>
                  <Typography.Text type='secondary' strong>10 seller</Typography.Text>
                  </Flex>
              </Flex>
            </Card>
        </Flex>
        <Flex vertical="row" gap='small' className='featured-seller'>
            <Flex align='center' justify='space-between'>
            <Typography.Title level={5} strong className='primay--color'>Featured Seller</Typography.Title>
            <Button type='link' className='gray--color'>View All</Button>
            </Flex>
            <Card>
              <Flex align='center' justify='space-evenly'>
                <Avatar.Group maxCount={5} maxPopoverTrigger='click' size="large" maxStyle={{color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'progress,'}}>
                {avatarData.map((avatar) => (
                        <Tooltip key={avatar.id} title={avatar.name} placement='top'>
                          <Avatar  src={avatar.picture} ></Avatar>
                        </Tooltip>
                        ))}
                </Avatar.Group>
                  <Divider type='vertical' className='divider'/>
                  <Flex vertical="row">
                  <Typography.Text type='secondary' strong>1,670 plant sold</Typography.Text>
                  <Typography.Text type='secondary' strong>50 seller</Typography.Text>
                  </Flex>
              </Flex>
            </Card>
        </Flex>
   
    </Flex>
  )
}

export default SellerLists;
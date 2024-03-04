import { Flex, Typography } from 'antd'
import React from 'react'
import Search from 'antd/es/input/Search'


const CustomHeader = () => {
  return (
    <Flex>
      <Typography.Title level={3} type='secondary'>
        Welcome back, Jhon
      </Typography.Title>

      <Flex align="center" gap="3rem">
        <Search placeholder='Search' allowClear />
        <Flex align='center' gap="11px"></Flex>
      </Flex>
    </Flex>
  )
}
export default CustomHeader
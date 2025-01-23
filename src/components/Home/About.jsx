import {Container, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Container id='About'>
      <Typography  className='first-title' component='h6' sx={{textAlign:'start'}} variant='h6'>About</Typography>
      <Typography className='second-title' component='h4' sx={{textAlign:'start'}} variant='h4'>Welcome to cmrFood</Typography>
      <Typography component='p'>Welcome to cmrFood, where flavor meets tradition! We are delighted to bring you the best of Cameroonian cuisine, crafted with fresh, local ingredients and served with a touch of love. Whether you're here for a casual meal or a special celebration, our menu offers a variety of dishes to satisfy every palate. Join us for a culinary journey that celebrates the vibrant tastes of Cameroon!.</Typography>
    </Container>
  )
}

export default About
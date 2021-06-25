import {
  Toolbar,
  Typography,
  Container,
  Box,
  Link,
  makeStyles,
} from '@material-ui/core'

import React from 'react'

const useStyles = makeStyles((theme) => ({
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    menuOption: {
      padding: theme.spacing(1),
      background: '#300',
      margin: '1px',
      color: '#fff',
    },
  })),
  NavigationBar = () => {
    const classes = useStyles()
    return (
      <Container>
        <Toolbar className={classes.toolbar}>
          <Typography>Hello</Typography>
          <Box className={classes.menuBox}>
            {['home', 'courses', 'sign up'].map((menuOption) => (
              <Link
                component='button'
                variant='body1'
                className={classes.menuOption}
              >
                {menuOption.toUpperCase()}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    )
  }
export default NavigationBar

import React, { useState } from 'react';
import { Input, IconMail, Button, IconLogIn, Alert, Checkbox, Typography, Menu, IconArrowDown } from "@supabase/ui";

import './App.css'

const App = () => {
  const [logIn, setlogIn] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleSubmit = () => {
    setlogIn(!logIn);
  }
  const handleToggle = () => {
    setMenu(!menu);
    console.log(menu);
  }
  return (
    <>
      <div className="Navbar">
        <img src="https://picsum.photos/100/60" alt="logo" />

        
        <Menu className="menu">
          <div onClick={handleToggle} className="menu__title">
            <Menu.Group title="Menu"  icon={<IconArrowDown/>}/>
          </div>
          {menu &&
            <div className="menu__item">
              <Menu.Item icon={<IconLogIn />}>Copy</Menu.Item>
              <Menu.Item icon={<IconLogIn />}>Duplicate</Menu.Item>
              <Menu.Item icon={<IconLogIn stroke="red" />}>Delete</Menu.Item>
            </div>
          }
          
        </Menu>
        
      </div>
      <div className="logIn">
        <Typography.Title level={2}>Log In</Typography.Title>
        <Input
          label="Email"
          placeholder="john@digweed.com"
          icon={<IconMail />}
          type="email"
        />
        <Input 
          label="Password"
          placeholder="********"
        />
        <Button
          icon={<IconLogIn/>}
          className="logIn__button"
          onClick={handleSubmit}
        >
          Log In
        </Button>

        <div className="policy">
          <Checkbox 
            label="Accept"
            className="policy__checkbox"
          />
          <Typography.Link
            level={4}
            target="_blank"
            href="https://www.supabase.com/privacy-policy"
            className="policy__link"
          >
            terms and conditions
          </Typography.Link>
        </div>
        
        
        {logIn && 
          <Alert title="Title of the alert" withIcon className='logIn__alert'>
            is logged in
          </Alert>
          
        }
      </div>
    </>
  )
}

export default App

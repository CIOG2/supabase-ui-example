import React, { useState } from 'react';
import { Input, IconMail, Button, IconLogIn, Alert, Checkbox, Typography } from "@supabase/ui";

import './App.css'

const App = () => {

  const [logIn, setlogIn] = useState(false);
  const handleSubmit = () => {
    setlogIn(!logIn);
  }
  return (
    <div className="logIn">
      <Typography.Title level={2}>Hello world</Typography.Title>
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
  )
}

export default App

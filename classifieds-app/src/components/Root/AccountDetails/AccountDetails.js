import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Account from './Account';
import Login from './Login';
import Signup from './Signup';

const AccountDetails = () => {
   const session = useSelector(state => state.session);
   const [isSigningUp, setSigningUp] = useState(false);

   if (session) return <Account />

   return isSigningUp ? (
      <Signup 
         onChangeToLogin={() => {
            setSigningUp(false);
         }}
      />
   ) : (
      <Login 
         onChangeToSignUp={() => {
            setSigningUp(true);
         }}
      />
   ); 
}

export default AccountDetails;
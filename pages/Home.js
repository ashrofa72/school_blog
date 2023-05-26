import React from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useUserAuth } from '../context/UserAuthContext';
import { auth } from '../config/firebase';

const Home = () => {
  const { logOut, user } = useUserAuth();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logOut();
      router.push('/');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
        {user && auth.currentUser.phoneNumber}&nbsp;
        <br />
        lastSignInTime : {user && auth.currentUser.metadata.lastSignInTime}
        &nbsp;
        <br />
        creationTime : {user && auth.currentUser.metadata.creationTime}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
        <div>
          <input type="text" />
          <input type="button" text="Press Here" />
        </div>
      </div>
    </>
  );
};

export default Home;

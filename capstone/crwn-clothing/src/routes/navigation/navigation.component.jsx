import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
<<<<<<< HEAD
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    const res = await signOutUser();
    setCurrentUser(null);
  };
=======

  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);
>>>>>>> relearning-firebase

  return (
    <Fragment>
      <div className='navigation'>
<<<<<<< HEAD
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>    
          )}
        </div>
=======
          <Link className='logo-container' to='/'>
            <CrwnLogo className='logo'/>
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
            {
              currentUser ? (
                <span className='nav-link' onClick={signOutUser}>
                  SIGN OUT
                </span>
              ) : (
                <Link className='sign-in-link' to='/auth'>
                  SIGN IN
                </Link>
              )
            }
          </div>
>>>>>>> relearning-firebase
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
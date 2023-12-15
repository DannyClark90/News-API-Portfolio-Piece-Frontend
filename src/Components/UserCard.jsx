import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useContext, useState } from 'react';
import Loading from '../Page-Components/Loading';
import '../css/UserCard.css'

const UserCard = ({user}) => {
    const { signedInUser, setSignedInUser } = useContext(UserContext)

    if(!Object.keys(user).length){
        return <Loading/>
    }
    else {
        return(
            <>
        <section id="userCard">
            <h3 className='font-bold text-lg text-black my-3'>{user.name}</h3>
            <img className='rounded-xl' id='userAvatarImg' src={user.avatar_url} alt="" />
                <div className='my-3'>
                    <section>
                        <p className='text-black font-bold'>User Name: <span className='text-black font-medium'>{user.username}</span></p>
                    </section>
            </div>
            <div id='logInButtonContainer'>
                <Link to={`/signed-in`}>
                    <button onClick={() => {setSignedInUser(user.name)}} type="button" className="px-6 py-3.5 text-base font-bold text-white bg-button-red hover:bg-button-red-hover rounded-lg text-center hover:shadow-xl">Log In</button>
                </Link>            
            </div>
        </section>
        </>
        )
    }    
};

export default UserCard;
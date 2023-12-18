import '../css/SignedIn.css'
import '../css/Style.css'
import { useContext } from 'react'
import { UserContext } from '../Components/UserContext'
import Image from '../assets/green-tick.gif'
import { Link } from 'react-router-dom'

const SignedIn = () => {
    const { signedInUser } = useContext(UserContext)

    if(signedInUser === "Sign In"){
        return (
            <>
            <main className="signedInPageWrapper">
              <h2 className='font-bold text-black text-4xl py-5'>Please Sign In...</h2>
                <Link to={`/user-login`}>
                    <button type="button" className="px-6 py-3.5 text-base font-bold text-white bg-button-red hover:bg-button-red-hover rounded-lg text-center hover:shadow-xl">Sign In</button>
                </Link> 
            </main>
            </>
          )
    }
    else{
        return (
          <>
          <main className="signedInPageWrapper">
            <h2 className='font-bold text-black text-4xl py-5'>Welcome {signedInUser}!</h2>
            <img id='signInConfirmationTick' src={Image} alt="Green signed in confirmation tick" />
            <Link to={`/`}>
                    <button type="button" className="px-6 py-3.5 my-4 text-base font-bold text-white bg-button-red hover:bg-button-red-hover rounded-lg text-center hover:shadow-xl">Back to home</button>
                </Link> 
          </main>
          </>
        )
    }

}

export default SignedIn
import '../css/Loading.css'
import '../css/Style.css'
import { useContext } from 'react'
import { UserContext } from '../Components/UserContext'
import Image from '../assets/green-tick.gif'

const PleaseSignIn = () => {
    const { signedInUser } = useContext(UserContext)

    return (
      <>
      <main id="loadingPageWrapper">
        <h2 className='font-bold text-black text-4xl py-5'>Please Sign In...</h2>
        <Link to={`/user-login`}>
              <button type="button" className="px-6 py-3.5 text-base font-bold text-white bg-button-red hover:bg-button-red-hover rounded-lg text-center hover:shadow-xl">Sign In</button>
          </Link> 
      </main>
      </>
    )
}

export default PleaseSignIn
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../css/Header.css'
import { useState, useContext } from 'react'
import { UserContext } from './UserContext'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'All Articles', href: '../all-articles', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const { signedInUser, setSignedInUser } = useContext(UserContext)

  const signOutClickHandler = (isSignedIn) => {
    if(isSignedIn === false){
      setSignedInUser("Sign In")
    }
  }

  return (
    <Disclosure as="nav" className='bg-NcNews-green'>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-6">
            <div className="relative flex h-16 items-center justify-end">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gre hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-10 w-10 bg-button-red rounded-md" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-10 w-10 bg-button-red rounded-md" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 items-center justify-center sm:items-stretch sm:justify-start hidden sm:ml-6 sm:block">
                  <div className="flex space-x-5 w-fit" >
                    <div className='bg-button-red rounded-lg font-bold p-2'>Dashboard</div>
                    <div className='py-2 hover:bg-green-hover hover:text-hoverColour rounded-lg font-bold'><Link to='/all-articles'>All Articles</Link></div>
                </div>
              </div>
                    <Link to='/'>
                      <button>
                        <img src="src/assets/home-icon.png" alt="Red & white home button" className='h-11 w-11' />
                      </button>
                    </Link>
              <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-12 w-12 rounded-full"
                        src="src/assets/Profile Button.png"
                        alt=""
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                        <Link to={`/user-login`} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>Sign In</Link> 
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                        <p onClick={() => {signOutClickHandler(false)}} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>Sign Out</p> 
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <div className='flex justify-end px-6'>
          <p className='font-bold'>{signedInUser}</p>
          </div>
          
          <Link to='/'>
          <div id='titleContainer'>
            <img id='NcNewsLogo' src="src/assets/NC-News-Logo.png" alt="NC News Logo. Red delta shape with orange lines in center to look like an open book." />
            <h1 className='font-bold text-white text-4xl lg:text-6xl m:5xl'>NC News</h1>
          </div>
          </Link>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-button-red text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

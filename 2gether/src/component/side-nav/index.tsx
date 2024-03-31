import sideNavigation from '../../@core/navigations/side-nav'
import { IoIosLogIn } from 'react-icons/io'

const EducationNav = () => {
  const educationnav = sideNavigation()

  return (
      <div className='h-screen'>
           <div className="pt-4 min-h-screen bg-purple-800  flex flex-col items-start">
      <ul className="flex flex-col gap-3 list-none text-gray-400 p-10 w-70">
        {educationnav.map((nav) => (
          <li className="mb-4" key={nav.title}>
            <a
              href={nav.link}
              className="font-light hover:text-white hover:font-medium"
            >
              <div className="flex items-center ml-0 p-0 gap-3">
                <span className="text-purple-300 w-8  text-lg font-medium">
                  <nav.icon size={32} />
                </span>
                <p className="text-purple-300 text-lg font-medium">
                  {nav.title}
                </p>
              </div>
            </a>
          </li>
        ))}
              <li  className="mt-10">
                    <a href={''}>
          <div className="flex items-center ml-0 p-0 gap-0.7">
            <IoIosLogIn color="#fff" size={25} width={57} /> &nbsp;&nbsp;{' '}
            <span className="text-white">Sign out</span>
          </div>
        </a>
              </li>
      </ul>
     
    </div>
      </div>
      
  )
}

export default EducationNav

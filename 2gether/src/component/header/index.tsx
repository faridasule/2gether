import { Image } from 'evergreen-ui'
import styles from './header.module.scss'
import { Search } from '../search-input'
import profileImg from '../../assets/profile-img.svg'
import notify from '../../assets/carbon_notification.svg'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className="header flex justify-between items-center  relative bg-white shadow-md px-2 md:px-4 py-2 md:py-3">
      <Image  width={150} src={logo} alt="2geda" />
      <div className={styles.nav}>
        <nav className="flex relative float-left items-center justify-end">
          <div>
            <div className={styles['info']}>
              <Search />

              <div className={styles.notify}>
                <Image
                  width={36}
                  className={styles['notify-picture']}
                  height={36}
                  src={notify}
                  alt="notify"
                />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  width={36}
                  className={styles['profile-picture']}
                  height={36}
                  src={profileImg}
                  alt="user-profile-picture"
                />
                <p className="text-sm"> My Profile</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

'use client'
import { usePathname } from 'next/navigation'
import { Link } from '../../i18n/routing'
import { NextPage } from 'next'
import { useThemeStore } from '@/store'

export const Profile_nav: NextPage = () => {
	const currentPath = usePathname()
	const localeRegex = /^\/([a-zA-Z-]{2,5})\//
	const localeMatch = currentPath.match(localeRegex)
	const locale = localeMatch ? localeMatch[1] : 'en'
	const { verifyState } = useThemeStore()

	return (
		<nav className='flex items-end min-h-[11rem] mb-[4rem]'>
			{verifyState ? (
				<ul className='flex items-center gap-2 pb-[.8rem]'>
        <li>
          <Link
            href={`/over`}
            className={`profile__nav-navbar-item ${
              currentPath === `/${locale}/over` ? 'active' : ''
            }`}
          >
            Assets
          </Link>
        </li>
        <li>
          <Link
            href={`/profile`}
            className={`profile__nav-navbar-item ${
              currentPath === `/${locale}/profile` ? 'active' : ''
            }`}
          >
            Deposit
          </Link>
        </li>
        <li>
          <Link
            href={`/security`}
            className={`profile__nav-navbar-item ${
              currentPath === `/${locale}/security` ? 'active' : ''
            }`}
          >
            Swap
          </Link>
        </li>
        <li>
          <Link
            href={`/verify`}
            className={`profile__nav-navbar-item ${
              currentPath === `/${locale}/verify` ? 'active' : ''
            }`}
          >
            Withdrawl
          </Link>
        </li>
        <li>
          <Link
            href={`/devices`}
            className={`profile__nav-navbar-item ${
              currentPath === `/${locale}/devices` ? 'active' : ''
            }`}
          >
            Commision Level
          </Link>
        </li>
      </ul>
			) : (
				<ul className='flex items-center gap-2 pb-[.8rem]'>
					<li>
						<Link
							href={`/over`}
							className={`profile__nav-navbar-item ${
								currentPath === `/${locale}/over` ? 'active' : ''
							}`}
						>
							Overview
						</Link>
					</li>
					<li>
						<Link
							href={`/profile`}
							className={`profile__nav-navbar-item ${
								currentPath === `/${locale}/profile` ? 'active' : ''
							}`}
						>
							Profile
						</Link>
					</li>
					<li>
						<Link
							href={`/security`}
							className={`profile__nav-navbar-item ${
								currentPath === `/${locale}/security` ? 'active' : ''
							}`}
						>
							Security
						</Link>
					</li>
					<li>
						<Link
							href={`/verify`}
							className={`profile__nav-navbar-item ${
								currentPath === `/${locale}/verify` ? 'active' : ''
							}`}
						>
							Verification
						</Link>
					</li>
					<li>
						<Link
							href={`/devices`}
							className={`profile__nav-navbar-item ${
								currentPath === `/${locale}/devices` ? 'active' : ''
							}`}
						>
							Authorized Devices
						</Link>
					</li>
				</ul>
			)}
		</nav>
	)
}

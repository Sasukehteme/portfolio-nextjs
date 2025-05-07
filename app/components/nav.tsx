import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export function Navbar() {
  return (
    <div className='w-full px-96 border-b border-gray-400'>
      <div className='h-full py-8 flex justify-between items-center'>
        <div>
          <Link href='/'>
            <h1 className='font-extrabold text-4xl'>Jack Wirata</h1>
          </Link>
        </div>
        <div className='h-full flex gap-6'>
          <Link href='mailto:jackwirata@gmail.com'>
            <FontAwesomeIcon icon={faEnvelope} size='xl' />
          </Link>
          <Link href='https://github.com/Sasukehteme'>
            <FontAwesomeIcon icon={faGithub} size='xl' />
          </Link>
        </div>
      </div>
    </div>
  )
}

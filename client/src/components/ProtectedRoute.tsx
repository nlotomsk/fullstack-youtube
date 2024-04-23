import { FC } from 'react'
import { useAuth } from '../hooks/useAuth'
import img from '../assets/images.png'

interface Props {
    children: JSX.Element
}

export const ProtectedRoute: FC<Props> = ({children}) => {
    const isAuth = useAuth()
  return (
    <>
    {isAuth ? (
        children
    ):(
        <div className='mt-20 flex flex-col items-centr justify-centr gap-18'>
            <h1 className='text-2xl'>To view this page you must be logged in</h1>
            <img className='w-1/3' src={img} alt='img'/>
        </div>
    )}
    </>
  )
}

import { ReactNode } from 'react'
import './Backdrop.css'

type propTypes = {
    children: ReactNode;
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function Backdrop({children, setShowCart}: propTypes) {
  return (
    <div onClick={() => setShowCart(false)} className='backdrop'>
        {children}
    </div>
  )
}

export default Backdrop
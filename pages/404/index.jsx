import Backdrop from '@mui/material/Backdrop';
import Link from 'next/link';

export default function Custom404() {

  return (
    <div>
      <Backdrop
        sx={{ color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 /* , background: 'white' */}}
        open={true}
      // onClick={handleClose}
      >
        <div>
          <p>Page Not Found</p>
          <Link href={'/'}>back to home page</Link>
        </div>
      </Backdrop>
    </div>
  )
}
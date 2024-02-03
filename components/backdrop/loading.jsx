import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import StateContext from '@/lib/context';

export default function LoadingBackdrop({children}){

  const { setOpen, open } = StateContext()

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {children}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        <CircularProgress/>
      </Backdrop>
    </div>
  )
}
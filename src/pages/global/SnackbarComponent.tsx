import { Snackbar, Alert, Slide, SlideProps } from '@mui/material'
import useSnackbar from '../../store/useSnackbar';

function TransitionUp(props: JSX.IntrinsicAttributes & SlideProps) {
    return <Slide {...props} direction="up" />;
}

export default function SnackbarComponent() {
    const { isOpen, message, severity, close } = useSnackbar()


    const handleClose = () => {
        close()
    }

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={isOpen}
            autoHideDuration={5000}
            onClose={(handleClose)}
            message={message}
            TransitionComponent={TransitionUp}
        >
            <Alert severity={severity} sx={{ minWidth: '300px', borderRadius: "10px" }}>
                {message}
            </Alert>
        </Snackbar>
    )
}
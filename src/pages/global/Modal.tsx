import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useModal from '../../store/useModal';


const Modal = () => {
    const { title, content, isOpen, close, primaryAction } = useModal()
    const handleClose = () => {
        close()
    }

    return (
        <Dialog
            fullWidth
            maxWidth='sm'
            open={isOpen}
            disableEnforceFocus={true}
            disableAutoFocus={true}
            onClose={handleClose}
        >
            <DialogTitle variant="h6" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                {title}
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
            <DialogActions>
                {primaryAction &&
                    <Box sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        width: "100%"
                    }}>
                        <Button variant="contained" color='secondary' onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" onClick={primaryAction}>Save</Button>
                    </Box>
                }
            </DialogActions>
        </Dialog>
    )
}

export default Modal;
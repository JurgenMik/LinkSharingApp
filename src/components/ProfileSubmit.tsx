import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface Props {
    message: string,
    open: boolean,
    icon: React.ReactNode,
    handleCloseSubmitAlert: () => void
}

function ProfileSubmit({message, open, icon, handleCloseSubmitAlert}: Props) {

    const vertical = 'bottom';
    const horizontal = 'center';

    const alertStyle = {
        width: '100%',
        fontSize: '1.05rem',
        background: 'hsla(0,0%,5%,0.75)'
    }

    return (
        <>
            <Snackbar
                open={open}
                onClose={handleCloseSubmitAlert}
                autoHideDuration={2000}
                anchorOrigin={{vertical, horizontal}}
            >
                <Alert icon={icon} sx={alertStyle}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
}

export default ProfileSubmit;
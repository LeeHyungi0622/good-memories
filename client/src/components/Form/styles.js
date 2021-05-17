import { Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    fileInput: {
        width: '97%',
        margin: '20px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
        borderRadius: '5px'
    },
    textfield: {
        margin: '5px 0'
    }
}));
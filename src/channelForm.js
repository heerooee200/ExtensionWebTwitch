import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from 'react-router-dom'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    channelid: '',
    channelname: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  color="primary" onClick={handleClickOpen}>
        Abrir
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Configuracion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Configuracion de combo de emotes
          </DialogContentText>
          <TextField
            margin="dense"
            id="chId"
            label="ID del canal"
            fullWidth
            value={values.channelid}
            onChange={handleChange('channelid')}
          />
          <TextField
            margin="dense"
            id="chName"
            label="Nombre del canal"
            fullWidth
            value={values.channelname}
            onChange={handleChange('channelname')}
          />
      
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" style={{  fontSize:'1rem' }}>
            Cancelar
          </Button>
          <Link to={"/combo?channelid="+values.channelid+"&channelname="+values.channelname} style={{ textDecoration: 'none', fontSize:'1rem' }}>
          
            <Button onClick={handleClose} color="primary" style={{  fontSize:'1rem' }}>
              Aceptar
            </Button>
          </Link>
        
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
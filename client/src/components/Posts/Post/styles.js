import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  overlay: {
    position: 'absolute',
    top: '2px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '2px',
    right: '20px',
    color: 'white',
  },
  
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  // TODO resize image to fit
  post: {
    objectFit: 'fill',
  }
});
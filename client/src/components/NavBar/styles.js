import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(()=> ({
  logo: {
    fontSize: '60px', 
    marginLeft: '20px'
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));
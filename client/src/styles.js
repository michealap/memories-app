import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(()=> ({
  image: {
    marginTop: '-5%',
    marginLeft: '-5%',
    position: 'fixed',
    zIndex: 5,
  },
  container: {
    margin: '15%',
    zIndex: 200,
  },
  logo: {
    fontSize: '60px', 
    marginLeft: '20px'
  }
}));
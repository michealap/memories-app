import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=> ({
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
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));
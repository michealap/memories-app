import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=> ({
  container: {
    marginLeft: '8%',
    marginTop: '5%',
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
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 500,
    width: 450,
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  ul: {
    justifyContent: 'space-around'
  }
}));
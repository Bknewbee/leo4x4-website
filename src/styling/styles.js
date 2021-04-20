import {makeStyles} from '@material-ui/core/styles';
import homeHeaderSGBG from "../images/aerial-Okovango-Delta.jpeg";
import homeHeaderLGBG from "../images/green-grass-drive-field.jpeg";

//aerial-Okovango-Delta
const useStyles = makeStyles((theme) =>({
  //App sytles
  title:{
    color: 'red'
  },
  darkMainBg:{
    backgroundColor: '#651f11',
    color: '#f0be08'
  },
  darkMainColor:{
    color: '#421714'
  },
  lightMainBG:{
    backgroundColor: '#e0cf6e'
  },
  lightMainColor:{
    color: '#f0be08'
  },
  //Home
  homeHeader:{
    minHeight: "100vh",
    fontSize: `calc(10px + 2vmin)`
  },
  smallDevices:{
    backgroundImage: `url(${homeHeaderLGBG})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  largeDevices:{
    backgroundImage: `url(${homeHeaderSGBG})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  positionBottom:{
    paddingTop: '340px'
  }


}))

export default useStyles

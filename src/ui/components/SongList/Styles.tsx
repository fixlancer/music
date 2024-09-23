import {StyleSheet, Dimensions} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  Row: {
    flexDirection:'row',
  },
  
  RowB: {
    flexDirection:'row',
    justifyContent:'space-between',
  }, 

  img: {
  width: RFValue(49),
  height: RFValue(46),
  borderRadius: 10,
  marginRight:10,
  },

  opacityBg: {
    position: 'absolute',
    width: 147,
    height: 'auto',
    paddingVertical:5,
    left: 5,
    bottom: 5,
    zIndex:99,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 20,
  },

  pickCount: {
    width:RFValue(18),
    height:RFValue(18),
    marginTop:12,
    backgroundColor:'#fff',
    borderRadius:30,marginRight:10,
    padding:0,
    justifyContent:'center',
    alignItems:'center',
  },

  button: {
    backgroundColor: '#1B2025',
    borderRadius:30,
    marginTop:10,
    width: 150,
    paddingHorizontal:15,
    paddingVertical:5,
      },
    
      buttonLabel: {
        fontSize: RFValue(13),
        color:'#fff',
        textAlign:'center'
      },

  titleLabel: {
    fontSize: RFValue(13),
    textAlign:'left',
    color:'#fff',
    fontFamily: 'Hestina',
  },

  subLabel: {
    fontSize: RFValue(11),
    textAlign:'left',
    color:'#fff',
    paddingLeft:0,
  },

  listView: {
    paddingVertical: 10, borderBottomColor: '#323A44', borderBottomWidth: StyleSheet.hairlineWidth,
  },

  normalView: {
    paddingVertical: 10,
  },
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default styles;

import {StyleSheet, Dimensions, Platform} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: width,
        height: height,
        flex:1,
        },
    
        header: {
          height:'auto',
          marginBottom:0,
          paddingTop:15,
          flexDirection:'row',
          paddingHorizontal:15,
          justifyContent:'space-between'
        },

    Row: {
    flexDirection:'row',
  },
  
  RowB: {
    flexDirection:'row',
    justifyContent:'space-between',
  }, 

  premiumBG: {
    width: '100%',
    minHeight: 227,
    position:'absolute',
    top:0,
    zIndex:-1,
    left:0,right:0,
    },

    billingBG: {
        marginTop:10, padding:8, borderRadius:10, borderColor:'#f27415', borderWidth: StyleSheet.hairlineWidth
    },

  midBg: {
    paddingTop: 0, flex: 1,
    paddingHorizontal: RFValue(15), width: '100%', height: '100%',
    backgroundColor: 'transparent',paddingBottom: Platform.OS === 'ios' ? 45 : 20,
  },



  titleLabel: {
    fontSize: RFValue(16),
    textAlign:'left',
    color:'#343434',
    fontFamily: 'Hestina',
  },

  tinyLabel: {
    fontSize: RFValue(11),
    textAlign:'left',
    color:'#808080',
    paddingLeft:0,
  },

  subLabel: {
    fontSize: RFValue(12),
    textAlign:'left',
    color:'#343434',
    paddingLeft:0,
  },
  button: {
    backgroundColor: '#f27415',
    borderRadius:10,
    marginTop:10,
    width:'100%',
    paddingVertical:10,
    height:'auto',
    justifyContent:'center',alignItems:'center',
      },
    
      buttonLabel: {
        fontSize: RFValue(13),
        color:'#fff',
        textAlign:'center',
      },


});

export default styles;

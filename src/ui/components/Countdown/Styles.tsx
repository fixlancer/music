import {StyleSheet, Dimensions, Platform} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: width,
    height: height,
    flex:1,
    },

    header: {
      height:'auto',
      marginBottom:10,
      paddingTop:20,
      width:'100%',
      flexDirection:'row',
      paddingHorizontal:10,
      justifyContent:'space-between'
    },

    midBg: {
      paddingBottom: Platform.OS === 'ios' ? 40 : 20, height:'100%', flex: 1, width:'100%',
    },
  Row: {
    flexDirection:'row',
  },
  
  info: {
    paddingHorizontal:15, paddingVertical: 15, borderBottomWidth:StyleSheet.hairlineWidth, borderColor: '#1C2229' 
  },

  RowB: {
    flexDirection:'row',
    justifyContent:'space-between',
  }, 

  bgOverlay: {
    backgroundColor: '#000', borderRadius:40,paddingHorizontal: 2, height:RFValue(35), width:RFValue(35), justifyContent:'center', alignItems:'center'
  },

  artwork: {
    width: (width - 90) / 1,
    height: (width - 90) / 1,
    borderRadius: 20,
    marginTop:5,
    marginBottom:20,
    justifyContent:'center',
    alignSelf:'center'
    },

  cat: {
    marginTop:15,
    minWidth:'50%',
    justifyContent:'center',alignItems:'center',
    paddingBottom:10,
    paddingTop:2,
      },
    
      catLabel: {
        fontSize: RFValue(13),
        textAlign:'center',
        color:'#fff',
      },


  titleLabel: {
    fontSize: RFValue(25),
    textAlign:'center',
    marginBottom:10,
    color:'#fff',
    fontFamily: 'Hestina',
  },

  subLabel: {
    fontSize: RFValue(13),
    textAlign:'center',
    marginBottom:10,
    color:'#fff',
    fontFamily: 'Nunito'
  },

  tinyLabel: {
    fontSize: RFValue(11),
    textAlign:'center',
    marginBottom:10,
    color:'#808080',
    fontFamily: 'Nunito'
  },

  countdownBg: {
    backgroundColor: '#000',
    zIndex:999,
    paddingHorizontal:15,
    paddingVertical:0,
    width:'100%',
    height:'100%',
    flex:1,
  },

  button: {
    backgroundColor: '#f27415',
    borderRadius:30,
    marginTop:10,
    marginRight:10,
    paddingHorizontal:20,
    paddingVertical:5,
      },
    
      buttonLabel: {
        fontSize: RFValue(12),
        color:'#fff',
      },
});

export default styles;

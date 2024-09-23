import {StyleSheet, Dimensions, Platform} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#20252B',
    width: width,
    height: height,
    flex:1,
    },

    header: {
      height:70,
      marginBottom:0,
      paddingTop:25,
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
    backgroundColor: '#000', borderRadius:40,paddingHorizontal: 2, height:RFValue(30), width:RFValue(30), justifyContent:'center', alignItems:'center'
  },
  profileImg: {
  width: '100%',
  height: 372,
  position:'absolute',
  top:0,
  zIndex:-1,
  left:0,right:0,
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

  nameLabel: {
    fontSize: RFValue(20),
    textAlign:'left',
    marginTop:10,
    marginBottom:15,
    color:'#fff',
  },

  namesubLabel: {
    fontSize: RFValue(12),
    textAlign:'left',
    marginTop:16,
    marginLeft:15,
    color:'#808080',
  },

  titleLabel: {
    fontSize: RFValue(20),
    textAlign:'left',
    marginBottom:5,
    color:'#fff',
    fontFamily: 'Hestina',
  },

  subLabel: {
    fontSize: RFValue(12),
    textAlign:'left',
    color:'#fff',
    paddingLeft:0,
    fontFamily: 'Nunito'
  },
  profileBg: {
    backgroundColor: '#20252B',
    zIndex:999,
    marginTop:-30,
    paddingHorizontal:0,
    paddingVertical:0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width:'100%',
    height:'100%',
    flex:1,
  },
});

export default styles;

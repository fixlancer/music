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
          height:'auto',
          marginBottom:15,
          paddingTop:20,
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

  midBg: {
    paddingTop: 0, flex: 1,
    paddingHorizontal: 0, width: '100%', height: '100%',
    backgroundColor: '#20252B',paddingBottom: Platform.OS === 'ios' ? 15 : 15,
  },


  cat: {
    marginTop:15,
    minWidth:'50%',
    justifyContent:'center',alignItems:'center',
    paddingBottom:10,
    marginBottom:0,
    paddingTop:2,
      },
    
      catLabel: {
        fontSize: 13,
        textAlign:'center',
        color:'#fff',
      },

  titleLabel: {
    fontSize: RFValue(16),
    textAlign:'left',
    color:'#fff',
    fontFamily: 'Hestina',
  },

  subLabel: {
    fontSize: RFValue(13),
    textAlign:'left',
    color:'#fff',
    paddingLeft:0,
  },


});

export default styles;

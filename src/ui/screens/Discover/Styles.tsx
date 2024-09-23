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
      marginBottom:10,
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
    backgroundColor: '#20252B',paddingBottom: Platform.OS === 'ios' ? 0 : 0,
  },

  img: {
  width: 59,
  height: 56,
  borderRadius: 20,
  marginRight:10,
  },

  searchHeader: {
    paddingHorizontal:15,
    marginVertical:10,
  },

  searchForm: {
    borderColor:'#272d35',
    backgroundColor:'#272d35',
    borderWidth: StyleSheet.hairlineWidth,
    width:'80%',
    height:'auto',
    borderRadius:10,
    paddingHorizontal:10,
    marginBottom:15,
  },

  text: {
    color:'#fff',
    alignSelf:'center',
    padding:5,
    paddingLeft:0,
    fontSize: RFValue(12),
    width:'100%'
  },

  cat: {
    backgroundColor: '#1B2025',
    borderRadius:30,
    marginTop:5,
    marginRight:7,
    width:'auto',
    paddingHorizontal:20,
    paddingVertical:10,
      },
    
      catLabel: {
        fontSize: RFValue(12),
        color:'#fff',
        textAlign:'center'
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

  titleLabel: {
    fontSize: RFValue(20),
    textAlign:'left',
    marginBottom:5,
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

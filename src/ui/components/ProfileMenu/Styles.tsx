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

  titleLabel: {
    fontSize: RFValue(12),
    textAlign:'left',
    color:'#fff',
    fontFamily: 'Hestina',
  },

  titleLabel2: {
    fontSize: RFValue(16),
    textAlign:'left',
    color:'#fff',
    fontFamily: 'Hestina',
  },

  subLabel: {
    fontSize: RFValue(12),
    textAlign:'left',
    color:'#fff',
    paddingLeft:0,
  },

  midBg: {
    paddingTop: 0, flex: 1,
    paddingHorizontal: 0, width: '100%', height: '100%',
    backgroundColor: '#20252B',
  },

  modalLine: {
    height:4, width: 30, borderRadius: 8, backgroundColor: '#4F5255', marginTop:-15, marginBottom:20, alignSelf:'center'
  },

  
  bgInner: {
    backgroundColor: '#1a1d22',
    borderRadius: 30,
    padding:15,
    height: 'auto',
    width: '100%'
      },
      
      
  bgDark: {
    backgroundColor: '#16191e',
    padding:10,
    height:'auto',
    borderRadius:15,
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth, borderColor: '#2A323C',
  },

  artWork: {
    width: RFValue(60),
    height: RFValue(60),backgroundColor:'#f2f2f2',
    borderRadius: 50,
  },

  
  drop: {
    width:'100%',
    borderWidth: StyleSheet.hairlineWidth, 
    borderColor: '#808080',
    borderRadius:20,
    height:'auto',
    marginTop:10,
    marginBottom:10,
  },

  dropDown: {
    width:'100%',
    borderWidth: StyleSheet.hairlineWidth, 
    borderColor: '#808080',
    borderRadius:20,
    height:'auto',
    marginTop:10,
    marginBottom:10,
  },

  text: {
    color:'#fff',
    padding:5,
    paddingLeft:15,
    fontSize: RFValue(12),
    width:'100%'
  },

  textarea: {
    padding: 15,
    height: 200,
    width: '100%', color: '#fff',
    fontSize: RFValue(13), marginRight: 0,
  },

  buttonUp: {
    backgroundColor: '#323A44',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#1B2025',
    borderRadius:30,
    marginTop:10,
    marginBottom:20,
    justifyContent:'center',
    alignSelf:'center',
    marginRight:10,
    paddingHorizontal:20,
    paddingVertical:5,
      },

  button: {
    backgroundColor: '#f27415',
    borderRadius:10,
    marginBottom: Platform.OS === 'ios' ? 40 : 20,
    width:'100%',
    height:'auto',
    marginTop:10,
    justifyContent:'center',alignItems:'center',
  },
    
      buttonLabel: {
        fontSize: RFValue(12),
        color:'#fff',
        paddingVertical:10,
        textAlign:'center',
      },
});

export default styles;

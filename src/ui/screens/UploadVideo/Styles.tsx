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
    paddingTop: 20, flex: 1,
    paddingHorizontal: 15, width: '100%', height: '100%',
    backgroundColor: '#20252B',paddingBottom: Platform.OS === 'ios' ? 15 : 15,
  },

  bgInner: {
backgroundColor: '#1a1d22',
borderRadius: 30,
padding:15,
height: (width - 40) / 1,
width: '100%',
borderWidth: StyleSheet.hairlineWidth, borderColor: '#2A323C',
  },


  closeIcon: {
    width: 22,
    height: 22,
    borderRadius: 20,
    backgroundColor: '#F73C41',
    justifyContent: 'flex-end',
    alignItems: 'center', marginTop: 0,

  },

  titleLabel: {
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

  drop: {
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

  modalLine: {
    height:4, width: 30, borderRadius: 8, backgroundColor: '#4F5255', marginTop:10, marginBottom:20, alignSelf:'center'
  },

  bottomButton: {
    marginTop:10,
    paddingHorizontal:15,
    marginBottom: Platform.OS === 'ios' ? 40 : 20,
  },

  button: {
    backgroundColor: '#f27415',
    borderRadius:10,
    width:'100%',
    height:'auto',
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

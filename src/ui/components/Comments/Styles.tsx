import {StyleSheet, Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('screen');
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#000',
    width: '100%',
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

modalHeader: {
  justifyContent:'center', alignItems:'center',  width:'100%', height:'auto', paddingBottom:10, marginBottom:10
},

modalLine: {
  height:4, width: 30, borderRadius: 8, backgroundColor: '#4F5255', marginTop:10, marginBottom:15, alignSelf:'center'
},

midBg: {
width: '100%', height: '100%', justifyContent: 'center', flex: 1,
},

img: {
  width: RFValue(29),
  height: RFValue(29),
  borderRadius: 20,
  marginRight:10,
  marginTop:2,
  },

  drop: {
    width:'78%',
    borderWidth: StyleSheet.hairlineWidth, 
    borderColor: '#808080',
    borderRadius:20,
    flexDirection:'row', justifyContent:'space-between',
    minHeight: 30,
    maxHeight: 70,
  },

  text: {
    borderRadius:20,
    color:'#fff',
    padding:5,
    paddingLeft:15,
    fontSize:12,
    width:'78%'
  },

  titleLabel: {
    fontSize: RFValue(16),
    textAlign:'left',
    marginBottom:5,
    color:'#fff',
    fontFamily: 'Hestina',
  },

  subLabel: {
    fontSize: RFValue(13),
    textAlign:'left',
    color:'#f1f1f1',
    paddingLeft:0,
  },
  
  subLabel2: {
    fontSize: RFValue(12),
    marginVertical:5,
    textAlign:'left',
    color:'#fff',
    paddingLeft:0,
  },

  tinyLabel: {
    fontSize: RFValue(11),
    textAlign:'left',
    color:'#565555',
    marginRight:15,
    marginTop:3,
    paddingLeft:0,
  },

  commentBar: {
    width:'100%', backgroundColor: '#101010', paddingHorizontal: 15, paddingTop:10, paddingBottom: Platform.OS === 'ios' ? 40 : 15
  }
});

export default styles;

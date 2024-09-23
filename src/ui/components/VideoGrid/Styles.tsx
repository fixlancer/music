import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({

  img: {
  width: (width - 5) / 3,
  height: 100,
  borderRadius: 0,
  marginHorizontal:1,
  },
  
  img2: {
    width: (width - 51) / 2,
    height: 100,
    borderRadius: 10,
    marginRight:10,
    marginHorizontal:0,
    marginBottom:10,
    },

});

export default styles;

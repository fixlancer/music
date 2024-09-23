import {
  Text,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Modal from 'react-native-modalbox';
import MyText from '../../components/DefaultTextComponent/MyText';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Styles';

interface Props {
    isOpen: boolean;
    desc: any;
    handleChange: () => void;
  }


const SongInfo: React.FC<Props> = props => {

return (
    <Modal isOpen={props.isOpen}
    styles={{}}
      onClosed={props.handleChange}
      coverScreen={true}
      swipeArea={600}
      backdropOpacity={0.4}
      backdropColor="#000"
      keyboardTopOffset={Platform.OS == 'ios' ? 22 : 0}
      position="top">

  <SafeAreaView
    style={{
      // height: height + StatusBar.currentHeight,
      // width: width,
      flex: 1,
      backgroundColor: '#000',
    }}
    edges={['left', 'right', 'top']}>
    <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />

    <View style={styles.modalHeader}>
<View style={styles.modalLine} />
<Text style={styles.titleLabel}>Song Inspiration</Text>
             
</View>


    <ScrollView style={{paddingHorizontal:15,marginBottom:0, flex:1}}>
        <MyText style={styles.subLabel}>{props.desc}</MyText>
     </ScrollView>
        
      
</SafeAreaView>
</Modal>

)
}

export default SongInfo;
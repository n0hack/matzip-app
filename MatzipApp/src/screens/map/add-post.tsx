import { mapNavigations } from '@/constants';
import { MapStackParamList } from '@/navigations/stack/map-stack-navigator';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

type AddPostScreenProps = StackScreenProps<
  MapStackParamList,
  typeof mapNavigations.ADD_POST
> & {};

export default function AddPostScreen({ route }: AddPostScreenProps) {
  console.log(route.params.location);
  return (
    <View style={styles.conatiner}>
      <Text>AddPostScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {},
});

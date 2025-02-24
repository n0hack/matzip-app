import { InputField } from '@/components/input-field';
import { colors, mapNavigations } from '@/constants';
import { MapStackParamList } from '@/navigations/stack/map-stack-navigator';
import { StackScreenProps } from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Octicons from '@react-native-vector-icons/material-design-icons';
import { CustomButton } from '@/components/custom-button';
import { useForm } from '@/hooks/useForm';
import { useEffect, useRef } from 'react';
import { validateAddPost } from '@/utils';
import { HeaderButton } from '@/components/header-button';
import { AddPostHeaderRight } from '@/components/add-post-header-right';

type AddPostScreenProps = StackScreenProps<
  MapStackParamList,
  typeof mapNavigations.ADD_POST
> & {};

export default function AddPostScreen({
  navigation,
  route,
}: AddPostScreenProps) {
  const descriptionRef = useRef<TextInput>(null);
  const addPost = useForm({
    initialValues: { title: '', description: '' },
    validate: validateAddPost,
  });

  const handleSubmit = () => {
    console.log('ㅎㅇ');
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => AddPostHeaderRight(handleSubmit),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.conatiner}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <InputField
            value=""
            disabled
            icon={
              <Octicons
                name="location-enter"
                size={16}
                color={colors.GRAY_500}
              />
            }
          />
          <CustomButton variant="outlined" size="large" label="날짜 선택" />
          <InputField
            placeholder="제목을 입력하세요."
            error={addPost.errors.title}
            touched={addPost.touched.title}
            returnKeyType="next"
            submitBehavior="submit"
            onSubmitEditing={() => descriptionRef.current?.focus()}
            {...addPost.getTextInputProps('title')}
          />
          <InputField
            ref={descriptionRef}
            placeholder="기록하고 싶은 내용을 입력하세요. (선택)"
            error={addPost.errors.description}
            secureTextEntry
            touched={addPost.touched.description}
            returnKeyType="next"
            multiline
            {...addPost.getTextInputProps('description')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    marginBottom: 10,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 20,
  },
});

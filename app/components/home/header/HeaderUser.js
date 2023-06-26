import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';

import { UserContext } from '../../../context/UserContext';

import styles from '../../../styles/header';
import { Bars3CenterLeftIcon } from 'react-native-heroicons/solid';

const HeaderUser = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const { 
    userName, 
    location,
    profileImg,
    isLoggedIn,
  } = useContext(UserContext);

  return (
    <View style={{ width: width }} className='flex-row w-full px-5 '>
      <View className='flex-row flex-1 mb-2'>
        <Image 
          source={{
            uri: profileImg
          }}
          className={styles.profileImage}
        />
        <View className='px-2'>
          <Text className={styles.userName}>{userName}</Text>
          <TouchableOpacity>
            <Text className={styles.location}>{location}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className='flex-2 justify-center'>
        <TouchableOpacity onPress={navigation.toggleDrawer}>
          <Bars3CenterLeftIcon color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HeaderUser
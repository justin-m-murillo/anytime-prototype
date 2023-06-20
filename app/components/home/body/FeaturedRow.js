import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'

import mainStyles from '../../../styles/mainstylesheet'
import styles from '../../../styles/featuredrow'

import FeaturedItem from './FeaturedItem'

const FeaturedRow = ({ title, description, items }) => {

  return (
    <View className={styles.container}>
      <View>
        <Text className={mainStyles.title}>{title}</Text>
        <Text className={mainStyles.shortDesc}>{description}</Text>
      </View>
      <FlatList
        className={styles.featuredList}
        data={items}
        renderItem={({item}) => 
          <FeaturedItem 
            key={item.id}
            imgUrl={`https://picsum.photos/seed/${Math.random()}/500`}
            businessName={item.businessName}
            distance={item.distance}
          />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default FeaturedRow
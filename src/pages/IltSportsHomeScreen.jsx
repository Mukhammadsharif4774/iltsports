import React from 'react';
import {StyleSheet, ImageBackground, FlatList, Text} from 'react-native';
import MarsSportsHeader from '../components/IltSportsHeader';
import MarsSportsMenuComponent from '../components/IltSportsMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {bettlitProducts} from '../helpers/bettlitProducts';
import BackgroundImage from '../assets/main_background.png';

export default function () {
  const renderProduct = ({item}) => <MarsSportsMenuComponent item={item} />;
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <MarsSportsHeader />

      <Text style={styles.title}>Меню</Text>

      <FlatList
        data={bettlitProducts}
        renderItem={renderProduct}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.main}
        style={styles.flex}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    paddingBottom: 100,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    width,
  },
  image: {
    width: '100%',
    height: 80,
    objectFit: 'contain',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.main,
  },
});

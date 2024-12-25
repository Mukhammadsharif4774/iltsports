import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import MarsSportsHeader from '../components/IltSportsHeader';
import MarsSportsComponent from '../components/IltSportsComponent';
import BackgroundImage from '../assets/main_background.png';
import SuccessIcon from '../assets/success_icon.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'MarsSportsHomeScreen'});
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <MarsSportsHeader />

      <Text style={styles.text}>
        Спасибо за {'\n'}
        резерв!
      </Text>

      <Image
        source={SuccessIcon}
        style={{
          width: width * 0.8,
          height: width * 0.8,
          objectFit: 'contain',
          alignSelf: 'center',
          marginTop: '10%',
        }}
      />

      <MarsSportsComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  text: {
    color: COLORS.main,
    textAlign: 'center',
    fontFamily: FONTS.black,
    fontSize: 30,
    marginTop: '25%',
    paddingVertical: 20,
  },
  description: {
    backgroundColor: COLORS.blue,
    paddingVertical: 15,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: 25,
    paddingHorizontal: 50,
  },
});

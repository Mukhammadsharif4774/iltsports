import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import QRCode from 'react-native-qrcode-svg';
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

      <Text style={styles.text}>Спасибо за {'\n'} заказ!</Text>

      <Image
        source={SuccessIcon}
        style={{
          width: width * 0.5,
          height: width * 0.5,
          objectFit: 'contain',
          alignSelf: 'center',
        }}
      />

      <View style={styles.qrContainer}>
        <QRCode
          value="https://xn--c1aksadab.xn--p1ai/sport-bar/"
          size={Dimensions.get('window').width / 2.5}
          color={COLORS.main}
        />
      </View>

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
  qrContainer: {
    alignItems: 'center',
    marginTop: '5%',
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  successIcon: {
    marginTop: 20,
    width: width * 0.5,
    height: width * 0.5,
    objectFit: 'contain',
    alignSelf: 'center',
  },
  text: {
    color: COLORS.main,
    textAlign: 'center',
    fontFamily: FONTS.black,
    fontSize: 32,
    marginTop: '15%',
    paddingVertical: 15,
  },
  image: {
    width: width * 0.35,
    height: width * 0.35,
    alignSelf: 'center',
    objectFit: 'contain',
    marginTop: 20,
  },
});

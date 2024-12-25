import React, {useContext, useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from './AppContext';
import {COLORS, FONTS, width} from '../helpers/colors';
import AddedIcon from '../assets/plus_icon.png';
import NoAddedIcon from '../assets/minus_icon.png';

export default function ({item}) {
  const {shouldRefresh, toggleRefresh} = useContext(AppContext);
  const [added, setAdded] = useState(false);

  const updateCart = useCallback(async () => {
    const cartList = await AsyncStorage.getItem('cartList');
    const cartArray = cartList ? JSON.parse(cartList) : [];
    const isProductInCart = cartArray.some(cart => cart.name === item.name);
    setAdded(isProductInCart);
  }, [item.name]);

  const handleCartUpdate = async action => {
    const cartList = await AsyncStorage.getItem('cartList');
    let cartArray = cartList ? JSON.parse(cartList) : [];

    if (action === 'add') {
      if (!cartArray.some(cart => cart.name === item.name)) {
        cartArray.push({...item, count: 1});
      }
    } else if (action === 'remove') {
      cartArray = cartArray.filter(cart => cart.name !== item.name);
    }

    await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
    toggleRefresh(prev => !prev);
  };

  const toggleCart = () => {
    added ? handleCartUpdate('remove') : handleCartUpdate('add');
  };

  useEffect(() => {
    updateCart();
  }, [updateCart, shouldRefresh]);

  return (
    <View style={styles.main}>
      <Image source={item?.image} style={styles.image} />

      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Text style={styles.title}>{item?.name}</Text>

        <Text style={styles.description}>{item?.description}</Text>

        <View style={styles.row}>
          <Text style={styles.price}>{item?.price} $</Text>

          <TouchableOpacity onPress={toggleCart}>
            {/*<Text style={styles.button}>{added ? 'УБРАТЬ' : 'КУПИТЬ'}</Text>*/}
            <Image
              source={!added ? AddedIcon : NoAddedIcon}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: width * 0.95,
    alignSelf: 'center',
    height: 320,
    marginTop: 35,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 10,
    borderRadius: 12,
    paddingBottom: 10,
  },
  image: {
    width: '100%',
    height: 190,
    borderRadius: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '100%',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    fontFamily: FONTS.light,
    color: COLORS.black,
    width: '100%',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
  },
  price: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    textAlign: 'center',
    verticalAlign: 'middle',
    marginLeft: 10,
    color: COLORS.black,
    borderRadius: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: COLORS.main,
    paddingVertical: 2,
  },
  button: {
    fontFamily: FONTS.black,
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.white,
    borderColor: COLORS.black,
    backgroundColor: COLORS.main,
    paddingHorizontal: 14,
    paddingVertical: 3,
    borderRadius: 8,
  },
  icon: {
    width: 40,
    height: 40,
    objectFit: 'contain',
  },
});

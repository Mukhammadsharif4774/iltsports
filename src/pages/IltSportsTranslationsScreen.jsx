import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import MarsSportsHeader from '../components/IltSportsHeader';
import BackgroundImage from '../assets/main_background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <MarsSportsHeader />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'EPL',
          '05.02 17:00',
          'Arsenal ' + '- Manchester United',
        )}
        {renderBroadcast(
          'NBA',
          '12.02 20:30',
          'Los Angeles Lakers ' + '- Boston Celtics',
        )}
        {renderBroadcast('Serie A', '18.02 21:15', 'Napoli ' + '- Roma')}
        {renderBroadcast(
          'NHL',
          '22.02 19:00',
          'Toronto Maple Leafs ' + '- Edmonton Oilers',
        )}
        {renderBroadcast(
          'MLB',
          '28.02 14:45',
          'New York Yankees ' + '- Houston Astros',
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.black,
    elevation: 5,
    paddingLeft: 20,
    borderRadius: 12,
    paddingVertical: 10,
  },
  league: {
    fontSize: 40,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.placeholder,
    marginLeft: 15,
  },
  teams: {
    textAlign: 'center',
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.white,
    marginTop: 5,
    marginLeft: 5,
  },
});

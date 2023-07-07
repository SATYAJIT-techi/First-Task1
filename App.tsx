import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const Greeting = props => {
  return (
    <View
      style={
        props.id == 1
          ? styles.smallCardComponent
          : [styles.smallCardComponent, styles.smallCardComponent2]
      }>
      <Text style={styles.titleText}>{props.title1}</Text>
      <Text style={styles.titleText}>{props.title2}</Text>
      <Text style={styles.number}>{props.number}</Text>
      <View style={{position: 'absolute', bottom: 20, paddingLeft: 20}}>
        <Text
          style={
            props.id == 1
              ? styles.streaksDesign
              : [styles.streaksDesign, styles.streaksDesign2]
          }>
          {props.streaks}
        </Text>
      </View>
    </View>
  );
};
const SmallerTask = data => {
  return (
    <View
      style={
        data.id == '1'
          ? styles.smallerTask
          : [styles.smallerTask, styles.smallerTask2]
      }>
      <View
        style={
          data.id == '1'
            ? {
                flexDirection: 'row',
                width: WIDTH * 0.75,
                height: HEIGHT * 0.1,
                alignItems: 'center',
                backgroundColor: '#C2DEDC',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }
            : {
                flexDirection: 'row',
                width: WIDTH * 0.75,
                height: HEIGHT * 0.1,
                alignItems: 'center',
                backgroundColor: '#bde0fe',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }
        }>
        <View style={{justifyContent: 'space-around', height: HEIGHT * 0.09}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            {data.headingText}
          </Text>
          <Text style={{fontSize: 15, fontWeight: '100', color: 'black'}}>
            {data.descriptionText}
          </Text>
        </View>
        <Image source={require('./assets/avatar.png')} style={styles.avatar} />
      </View>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarImage}>
        <Image source={require('./assets/avatar.png')} style={styles.avatar} />
        <TouchableOpacity onPress={() => {}} style={styles.connectToCLass}>
          <Text style={{color: 'white'}}>Connect to Class</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.andrewText}>
        <Text style={styles.textDisplay}>Nice Streak,</Text>
        <Text style={styles.textDisplay}>ANDREW</Text>
      </View>
      <View style={styles.bigCards}>
        <Greeting
          id="1"
          title1="Days"
          title2="in Training"
          number="255"
          streaks="24 Days in a row"
        />
        <Greeting
          id="2"
          title1="Completed"
          title2="Courses"
          number="12"
          streaks="2 in this month"
        />
      </View>

      <View style={styles.smallCards}>
        <View style={styles.smallCards2}>
          <View
            style={{
              flexDirection: 'row',
              width: WIDTH * 0.9,
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
              Todays Classes
            </Text>
            <Image
              source={require('./assets/avatar.png')}
              style={styles.avatar}
            />
          </View>
          <View style={styles.smallCardComponentTask}>
            <SmallerTask
              id="1"
              headingText="Design System in Figma"
              descriptionText="OnGoing Nicolous"
            />
            <SmallerTask
              id="2"
              headingText="Animation in Protopie"
              descriptionText="2:00 PM Alex.M"
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomTabBar}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('./assets/avatar.png')}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('./assets/avatar.png')}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('./assets/avatar.png')}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'black'}}>hi</Text>
    </View>
  );
};
const CalenderScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'black'}}>hi</Text>
    </View>
  );
};
const StatsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'black'}}>hi</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {position: 'absolute', bottom: 10},
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarActiveBackgroundColor: 'black',
            tabBarActiveTintColor: 'white',
            tabBarItemStyle: [styles.tabStyle],
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarActiveBackgroundColor: 'black',
            tabBarActiveTintColor: 'white',
            tabBarItemStyle: [styles.tabStyle],
          }}
        />
        <Tab.Screen
          name="Calender"
          component={CalenderScreen}
          options={{
            headerShown: false,
            tabBarActiveBackgroundColor: 'black',
            tabBarActiveTintColor: 'white',
            tabBarItemStyle: [styles.tabStyle],
          }}
        />
        <Tab.Screen
          name="Stats"
          component={StatsScreen}
          options={{
            headerShown: false,
            tabBarActiveBackgroundColor: 'black',
            tabBarActiveTintColor: 'white',
            tabBarItemStyle: [styles.tabStyle],
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  avatarImage: {
    height: HEIGHT * 0.09,
    // backgroundColor:'pink',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingTop: 10,
  },
  avatar: {
    height: HEIGHT * 0.05,
    width: WIDTH * 0.1,
  },
  connectToCLass: {
    // padding:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    height: HEIGHT * 0.06,
    width: WIDTH * 0.4,
    borderRadius: 20,
  },
  andrewText: {
    height: HEIGHT * 0.1,
    width: WIDTH,
    // backgroundColor:'pink'
  },
  titleText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  number: {
    position: 'absolute',
    bottom: 50,
    paddingLeft: 20,
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
  },
  streaksDesign: {
    backgroundColor: 'pink',
    paddingHorizontal: 8,
    color: 'grey',
    borderRadius: 10,
  },
  streaksDesign2: {
    backgroundColor: 'lightblue',
  },
  textDisplay: {
    fontSize: 30,
    color: 'black',
    paddingLeft: WIDTH * 0.05,
    fontWeight: 'bold',
  },
  bigCards: {
    height: HEIGHT * 0.35,
    // backgroundColor:'pink',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  smallCards: {
    height: HEIGHT * 0.4,
    // backgroundColor:'red',
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-around',
  },
  smallCards2: {
    height: HEIGHT * 0.39,
    width: WIDTH * 0.9,
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 20,
  },
  smallCardComponent: {
    width: WIDTH * 0.45,
    height: HEIGHT * 0.27,
    borderRadius: 10,
    padding: 9,
    backgroundColor: '#F8C8DC',
  },
  smallCardComponent2: {
    backgroundColor: '#C2DEDC',
  },
  smallCardComponentTask: {
    height: HEIGHT * 0.3,
    width: WIDTH * 0.85,
    justifyContent: 'space-around',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
  smallerTask: {
    height: HEIGHT * 0.13,
    width: WIDTH * 0.8,
    backgroundColor: '#C2DEDC',
    borderRadius: 20,
    padding: 10,
  },
  smallerTask2: {
    backgroundColor: '#bde0fe',
  },
  bottomTabBar: {
    height: HEIGHT * 0.08,
    backgroundColor: 'grey',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabStyle: {
    borderRadius: 10,
    height: 50,
    
  },
});

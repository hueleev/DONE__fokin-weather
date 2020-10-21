import React from 'react';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';

const API_KEY = "32cd6bad7a6610881e2a706b1d8d64e7";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
          main: { temp },
          weather
        }
      } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=Metric`
      );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp: temp
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }

  };
  componentDidMount() {
    this.getLocation();
  };
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  };
}
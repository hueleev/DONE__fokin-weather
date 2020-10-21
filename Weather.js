import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstrom: {
        iconName: "weather-lightning",
        gradient: ["#b92b27", "#1565C0"],
        title: "Thunderstrom",
        subtitle: "Just don't go outside"
    },
    Drizzle: {
        iconName: "weather-partly-rainy",
        gradient: ["#6190E8", "#A7BFE8"],
        title: "Drizzle",
        subtitle: "T _T)/"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#0575E6", "#021B79"],
        title: "Rain",
        subtitle: "T 0T)/"
    },
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#CC95C0", "#DBD4B4", "#7AA1D2"],
        title: "Snow",
        subtitle: "^ 0^)/"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#8360c3", "#2ebf91"],
        title: "Mist",
        subtitle: "- 0-)/"
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#8360c3", "#2ebf91"],
        title: "Smoke",
        subtitle: "- 0-)/"
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#8360c3", "#2ebf91"],
        title: "Haze",
        subtitle: "- 0-)/"
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#8360c3", "#2ebf91"],
        title: "Dust",
        subtitle: "- 0-)/"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#8360c3", "#2ebf91"],
        title: "Fog",
        subtitle: "- 0-)/"
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#636363", "#a2ab58"],
        title: "Sand",
        subtitle: "- 0-)/"
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#636363", "#a2ab58"],
        title: "Ash",
        subtitle: "- 0-)/"
    },
    Squall: {
        iconName: "weather-pouring",
        gradient: ["#2C3E50", "#4CA1AF"],
        title: "Squall",
        subtitle: "- 0-)/"
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#870000", "#190A05"],
        title: "Tornado",
        subtitle: "T ^T)/"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#2BC0E4", "#EAECC6"],
        title: "Clear",
        subtitle: "^ 0^)/"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#085078", "#85D8CE"],
        title: "Clouds",
        subtitle: "- .-)/"
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOptions[condition] ? weatherOptions[condition].iconName : "weather-partly-snowy-rainy"}
                    color="white"></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}˚C</Text>
            </View>
            <View style={[styles.halfContainer, styles.textContainer]}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstrom",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",
        left: -20
    }
})
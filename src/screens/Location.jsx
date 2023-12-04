import React, { useEffect, useState } from 'react';
import { View, Button, Alert, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as ScreenCapture from 'expo-screen-capture';

import * as Location from 'expo-location';
import { Magnetometer } from 'expo-sensors';
import styles from '../utils/styles';
import Header from '../components/Header';
import { Feather } from '@expo/vector-icons';


const Locationpog = () => {

    const [location, setLocation ] = useState(null);
    const [bussola, setBussola] = useState({x: 0, y: 0, z: 0});
    const [corBussola, setCorBussola] = useState('#000');
    const [direcao, setDirecao] = useState('Norte');

    ScreenCapture.preventScreenCaptureAsync()
    
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted') {
                Alert.alert('Permissão de acesso à localização negada!');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
            console.log(location.coords);
        })();
    }, []);

    useEffect(() => {
        const subscribeToMagnetometer = () => {
          Magnetometer.setUpdateInterval(100);
          Magnetometer.addListener((data) => {
            setBussola(data);
            atualizarCorBussola(data);
          });
        };
    
        subscribeToMagnetometer();
    
        return () => {
          Magnetometer.removeAllListeners();
        };
      }, []);

      const atualizarCorBussola = (data) => {
        const angle = Math.atan2(data.y, data.x) * (180 / Math.PI) + 180;
    
        if (angle >= 45 && angle < 135) {
          setCorBussola('#42b9f5');
          setDirecao('Sul');
        } else if (angle >= 135 && angle < 225) {
          setCorBussola('#b942f5');
          setDirecao('Oeste');
        } else if (angle >= 225 && angle < 315) {
          setCorBussola('#f54299');
          setDirecao('Norte');
        } else {
          setCorBussola('#b0f542');
          setDirecao('Leste');
        }
      };

    return (
        <View style={styles.container}>
            <Header title='Mapa' />
            
            {location ? (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, width: 300}}>
                    <Feather
                        name="arrow-up"
                        size={40}
                        color={corBussola}
                        style={{
                        transform: [{ rotate: `${bussola.x}deg` }],
                        alignSelf: 'center',
                        }}
                            />
                             <Text style={{ fontSize: 30, color: corBussola, alignSelf: 'center' }}>{direcao}</Text>
                        <View style={{borderColor: corBussola, borderRadius: 60, height: 300, width: 300, overflow: "hidden", borderWidth: 5, shadowOffset: {width: 10, height: 10}}}>
                            <MapView
                                style={{ flex: 1 }}
                                initialRegion={{
                                    latitude: location.latitude,
                                    longitude: location.longitude,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                            >
                        
                            <Marker
                                coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                                title="Localização do dispositivo"
                                description="Esta é a atual localização do dispositivo."
                            />
                        </MapView>
                        </View>
                    </View>
                </View>
            ) : (
                <Text>Carregando...</Text>
            )}

        </View>
    );
}

export default Locationpog;
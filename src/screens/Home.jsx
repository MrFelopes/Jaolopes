import { View, StyleSheet, Text, Button, Image } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../utils/styles";

export default function Home({navigation}){

    return(
        <View style={styles.container}>
            <Header title="Bem-vindo!" style={styles.header}/>
            <Text style={{ textAlign: "center", fontSize: 30, marginBottom: 7, fontWeight: 200}}>Equipe:</Text>
            <View style={{ alignItems: "center"}}>
                <Image source={require('../img/takagifox.png')} style={{ width: 150, height: 150, marginBottom: 5, borderRadius: 500, borderColor: "#000", borderWidth: 3}} />
                <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 5 }}>Felipe Redivo</Text>
                <Image source={require('../img/sorrizoronaldo.jpg')} style={{ width: 150, height: 150, marginBottom: 5, borderRadius: 500, borderColor: "#000", borderWidth: 3}} />
                <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 5 }}>João Bosco</Text>
            </View>
            <View style={{ alignItems: "center", marginRight: 20 }}>
            </View>
            <Button 
                mode="contained"
                onPress={()=>{navigation.navigate("Location")}} 
                title="Veja o mapa!"
            />
        </View>
    )
}
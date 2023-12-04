import { Button, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#606",
        paddingHorizontal: 25,
        padding:20,
    }
});

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Button title="Sair" />
        </View>
    )
}
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#e8f5e9' 
    },
    inputs: {
        width: "90%"
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#4caf50' 
    },
    button: {
        width: "90%",
        backgroundColor: '#4caf50' 
    },
    textRedirect: {
        marginTop: 20,
        fontSize: 17,
        fontWeight: 'bold',

        color: '#388e3c' 
    },
    rootHome: {
        flex: 1,
        marginVertical: 55,
        marginHorizontal: 25,
        backgroundColor: '#e8f5e9' 
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#4caf50', 
        borderRadius: 10,
        marginBottom: 20
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff' 
    },
    
    
    rootMessage: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 20,
        alignItems: 'center',
        backgroundColor: '#a5d6a7', 
        borderRadius: 10,
        marginVertical: 5
    },
    
    productCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#a5d6a7', 
        borderRadius: 10,
        marginVertical: 5
    },
    totalAmount: {
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#4caf50', 
        borderRadius: 10
    },
    totalText: {
        fontSize: 18,
        color: '#fff', 
        fontWeight: 'bold'
    },
    logoutButton: {
        marginTop: 20,
        backgroundColor: '#4caf50' // Botón verde
    }
  
})
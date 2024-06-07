import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Text, Button} from 'react-native-paper';
import { styles } from '../../theme/styles';
import firebase, { signOut } from 'firebase/auth';
import { auth } from '../../configs/firebaseConfig';


// Interface - Producto
interface Product {
    name: string;
    price: number;
}

export const HomeScreen = () => {
   
    
    // Hook useState: lista de productos
    const [products] = useState<Product[]>([
        { name: 'mouse', price: 50 },
        { name: 'laptop', price: 1500 },
        { name: 'teclado', price: 80 },
        { name: 'monitor', price: 120 }
    ]);

    // Calcular el valor total a pagar
    const totalAmount = products.reduce((sum, product) => sum + product.price, 0);

    //Acción para cerrar sesión unicamente
    const handleLogout = async () => {
        await signOut(auth);
        
    };
    //Faltaria completar funciones adicionales.

    return (
        <>
            <View style={styles.rootHome}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>DOCUMENTACIÓN</Text>
                </View>
                <View>
                    <FlatList
                        data={products}
                        renderItem={({ item }) => (
                            <View style={styles.productCard}>
                                <Text>{item.name}</Text>
                                <Text>${item.price}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <Button
                mode="contained"
                style={styles.logoutButton}
                onPress={handleLogout}
            >
                Logout
            </Button>
                    
                </View>
                <View style={styles.totalAmount}>
                    <Text style={styles.totalText}>Total a pagar: ${totalAmount}</Text>
                </View>
                
            </View>
            
        </>
    );
}
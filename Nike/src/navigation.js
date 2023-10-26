import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ShoppingCart from './screens/ShoppingCart';
import ProductsScreen from './screens/ProductsScreen';
import Welcome from './screens/Welcome';
import Signup from './screens/Signup';
import Login from './screens/Login';
import { Pressable } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ contentStyle:{ backgroundColor: 'white'}}}>
        <Stack.Screen 
        name="Products" 
        component={ProductsScreen} 
        options={({navigation}) => ({
            headerRight:() => (
            <Pressable onPress={()=> navigation.navigate('Cart')} style={{flexDirection: 'row'}}>
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft:5, fontWeight: '500'}}>1</Text>
            </Pressable>
            ),
        })}
        />
        <Stack.Screen name="Product Details" 
            component={ProductDetailsScreen} 
            options={{ presentation:'modal'}} 
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />

        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
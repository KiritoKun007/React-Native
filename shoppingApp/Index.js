import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductOverviewScreen from './screens/shop/ProductOverviewScreen';
import { defaultNavigationOptions } from './navigation/DefaultNavigationOptions';
import ProductDetailScreen from './screens/shop/ProductDetailScreen';

const Stack = createStackNavigator()

const Index = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Shop" screenOptions={defaultNavigationOptions} >
            <Stack.Screen 
              name="Shop" 
              options={{ title: 'My Shop' }}
              component={ProductOverviewScreen} />
            <Stack.Screen
              name="Detail"
              options={
                ({ route }) => ({ title: route.params.name })
              }
              component={ProductDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Index

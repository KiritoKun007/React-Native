import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    Image, 
    ScrollView 
} from 'react-native';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({

}) 

const ProductDetailScreen = (props) => {

    const { productId } = props.route.params
    const product = useSelector(state => 
        state.products.availableProducts.find(prod => prod.id === productId)
    )

    return (
        <View>
            <Text>{product.title}</Text>
        </View>
    )
}

export default ProductDetailScreen

import React from 'react'
import { 
    View, 
    Image, 
    StyleSheet, 
    Text, 
    Button, 
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native'
import colors from '../../constants/colors'

const ProductItem = (props) => {

    let TouchableComponent = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback
    }

    return (
        <View style={styles.product}>
            <View style={{overflow: 'hidden', borderRadius: 10}}>
                <TouchableComponent onPress={props.onViewDetail} useForeground >
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{uri: props.image}} />
                        </View>
                        <View style={styles.productDetail}>
                            <View style={styles.details}>
                                <Text style={styles.title}>{props.title}</Text>
                                <Text style={styles.price} >${props.price.toFixed(2)}</Text>
                            </View>
                            <View style={styles.actions} >
                                <Button color={colors.primary} title="View Details" onPress={props.onViewDetail} />
                                <Button color={colors.primary} title="Add To Cart" onPress={props.onAddingToCart} />
                            </View>
                        </View>
                    </View>
                </TouchableComponent>
            </View>
        </View>
    )
}
    
const styles = StyleSheet.create({
    productDetail: {
        backgroundColor: 'white', 
        height: '40%', 
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        elevation: 5,
    },
    product: {        
        shadowColor: colors.primary,
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 5,
        shadowRadius: 8,
        height: 300,
        margin: 20,
        borderRadius: 10
        // overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
        elevation: 5    
    },
    image : {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 5
    },
    details: {
        alignItems: 'center',
    }
})
export default ProductItem

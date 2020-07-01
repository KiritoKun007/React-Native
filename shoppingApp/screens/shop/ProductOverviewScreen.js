import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'

const ProductOverviewScreen = (props) => {
    const products = useSelector( state => state.products.availableProducts )
    return <FlatList 
                data={products} 
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ProductItem 
                        image={item.imageURL}
                        title={item.title}
                        price={item.price}
                        onViewDetail={() => {
                            props.navigation.navigate('Detail', {
                                productId: item.id,
                                name: item.title
                            })
                        }}
                        onAddingToCart={() => {

                        }} />
                )} />
}

export default ProductOverviewScreen

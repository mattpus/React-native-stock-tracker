import React from 'react'
import {FlatList} from 'react-native'
import StockItem from "../components/StockItem"
import ListItemSeparator from "../components/ListItemSeparator"

const StockScreen = ({navigation, data}) => {
    return (
        <FlatList 
            data={data}
            keyExtractor={(item) => item.name}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => (
                <StockItem 
                    name={item.name} 
                    symbol={item.symbol}
                    currentPrice={item.currentPrice.value}
                    onPress={() => navigation.navigate("Details", item)}
                />   
            )}
        />
    )
  }

export default StockScreen
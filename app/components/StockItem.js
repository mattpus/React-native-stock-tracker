import React from 'react'
import {Text, View, StyleSheet,} from "react-native"
import { TouchableHighlight } from 'react-native-gesture-handler'
 
const StockItem = ({name, symbol, currentPrice, onPress}) => {

    return (
    <TouchableHighlight  onPress={onPress}>
        <View style={styles.listItemContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.title}>{symbol}</Text>
                <Text style={styles.description}>{name}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>{currentPrice}</Text>
            </View>
        </View>
    </TouchableHighlight>

     
    )
  }
  const styles = StyleSheet.create({
    listItemContainer:{
      backgroundColor: "#0B0B0B",
      flexDirection: "row",
      height: 90
    },
    nameContainer:{
      flex: 1,
      paddingLeft: 20,
      justifyContent: "center"

    },
    title: {
      color: "white",
      fontWeight: 'bold',
      fontSize: 20,
    },
    description: {
      color: '#D3D3D3',
    },
    priceContainer: {
      flex: 1, 
      justifyContent: "center",
      alignItems: "center"
    },
    price: {
      
      justifyContent: "center",
      color: "white",
      fontSize: 20
    }
  })
  
  
  export default StockItem
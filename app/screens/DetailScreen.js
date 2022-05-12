import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ListItemSeparator from '../components/ListItemSeparator'


const DetailScreen = ({route, navigation}) => {
  
    const item = route.params
    return(
        <View style={styles.listItemContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.title}>{item.symbol}</Text>
                <Text style={styles.description}>{item.name}</Text>
                <Text style={styles.priceCurrent}>{item.currentPrice.value}</Text>
            </View>
            <ListItemSeparator />
            <View style={styles.infoContainer}>
                <Text style={styles.info}>ISIN: {item.isin}</Text>
                <Text style={styles.info}>{item.exchange}</Text>
            </View>
            <ListItemSeparator />
            <View style={styles.priceDetailsContainer}>
                <Text style={styles.price}>open     {item.priceDetails.openPrice.value}</Text>
                <Text style={styles.price}>close    {item.priceDetails.closePrice.value}</Text>
                <Text style={styles.price}>high   {item.priceDetails.highPrice.value}</Text>
                <Text style={styles.price}>low    {item.priceDetails.lowPrice.value}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    listItemContainer:{
        backgroundColor: "#303030",
        flex:1
        
      },
      nameContainer:{
        height: 60,
        paddingLeft: 20,
        flexDirection: "row",
        marginBottom: 10,
        alignItems: 'center',
        marginTop: 10
  
      },
      title: {
        flex: 1,
        color: "white",
        fontWeight: 'bold',
        fontSize: 40,
        alignItems: 'center',
       
      },
      description: {
        flex: 1,
        padding: 7,
        alignItems: 'center',
        
        color: '#D3D3D3',
       
      },
      priceCurrent: {
        flex: 1,
        color: "white",
        padding: 7,
        fontSize: 30,
        marginLeft: 60
  
      },
      infoContainer: {
        justifyContent: "center",
        height: 80,
        padding: 10,
        backgroundColor: "#1D1D1D"
      },
      info: {
        color: "grey",
        fontSize: 20,
      },
      priceDetailsContainer:{
        height: 100,
       backgroundColor: "#0B0B0B",
        flexWrap: "wrap",
      },
      price: {
        justifyContent: "center",
        color: "#A3A3A3",
        fontSize: 20,
        paddingRight: 40,
        paddingLeft: 10,
        paddingTop: 15    } 
})

export default DetailScreen
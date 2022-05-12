import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from'@react-navigation/stack'
import StockScreen from "./app/screens/StockScreen"
import DetailScreen from "./app/screens/DetailScreen"



const Stack = createStackNavigator();
const StockNavigator = ({data})=> (
  <Stack.Navigator>
    <Stack.Screen name="Stocks">
      {(props) => <StockScreen {...props} data={data}/>}
    </Stack.Screen>
    <Stack.Screen name="Details">
    {(props) => <DetailScreen {...props} data={data}/>}
    </Stack.Screen>
  </Stack.Navigator>
)


//https://www.reddit.com/r/reactnative/comments/fo2zpo/react_navigation_5_pass_props_to_component_in/

const serverURL = "http://192.168.0.39:3001/instruments"

export default function App() {
  
  const [counter, setCounter] = useState(1)
  const [data, setData] = useState([])
  
  useEffect(() =>{
    
      fetch(serverURL)
      .then((response) => response.json())
      .then((json) => {setData(json)})
      .catch((error) => alert(error))
      .finally(() =>{ 
        
        setTimeout( () => setCounter(counter+1), 5000)
      
      })

   
  }, [counter])

  
  return (
    /*<NavigationContainer>
     <FlatList 
            data={data}
            keyExtractor={(item) => item.name}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => (
                <StockItem 
                    name={item.name} 
                    symbol={item.symbol}
                    currentPrice={item.currentPrice.value}
                    onPress={()=> navigation.navigate("Details", item)}
                />   
            )}
        />
    </NavigationContainer>*/
    
    <NavigationContainer>
    <StockNavigator data={data}/>
   </NavigationContainer>
   
  )
}


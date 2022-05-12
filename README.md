## React-native-stock-tracker

This is my first project for react-native. 
The purpose of the excersize was to get familiar with basic concept of React:
-creating components,
-creating screens,
-fetching data,
-creating endpoint (server),
-usage of hooks, 
-passing props to different components
etc.

Here is my process of tackling the assigment.
   - Installing the development enviroment. /n
   - Creating first componenets - StockItem, ListItemSeparator
   - Creating StockScreen 
   - Creating data file .json. 
   - Testing StockScreen with the data from the file.
   - Creating DetailScreen.
   - Testing it with the data from the file.
   - Creating Express server and testing it with localhost link. 
   - Implementing RandomPrice feature in the server. 
   - Creating Fetch API funcionality in the app. (I had lots of problems so I decided to creat a reactapp just to check the functionality in the browser and use             console for displaying the data that I managed to get. 
   - Implementing 5sec refresh of the prices. 
   - Passing data to the components. 
   - to be continued.... 





## Assessment (ReactNative)

For this assesment you will be asked to build a ReactNative application to display information retrieved from a stock exchange information system. The goal is to deliver a working application that will show the available stocks and their price in a list overview, and create an additional view the user can see by selecting an item from the overview list.

### Data

You need to retrieve the data to display from somewhere. For this assessment, we would like you to serve through your own backend, hint:

- You can write your own Node.js endpoint that the app will connect to in order to retrieve the data.

The datasource should be polled regularly, every 5 seconds for example.

This is how the data structure should look (note that you can add your own arbitrary extra instruments to the array. Be sure to include at least 10 instruments in your dataset):

```
"instruments": [
        {
            "exchange": "Equiduct Netherlands",
            "isin": "NL0000009355",
            "name": "Apple",
            "symbol": "AP",
            "currentPrice": {
                "value": 49.055,
                "currency": "EUR",
            },
            "priceDetails": {
                "closePrice": {
                    "value": 49.02,
                    "currency": "EUR",
                },
                "highPrice": {
                    "value": 49.255,
                    "currency": "EUR",
                },
                "lowPrice": {
                    "value": 48.78,
                    "currency": "EUR",
                },
                "openPrice": {
                    "value": 49.0699,
                    "currency": "EUR",
                }
            },
            "intradayPriceMutation": 0.07139942880456956,
            "datetime": "2022-05-05T15:15:39.739Z"
        },
        {...}
        ]
```

For displaying the overview list, in particular the `name` can be used for the name of the instrument, and the `currentPrice.value` for the price.

###### Optional:
You could make the dataset change on each read. For example, randomize the prices on each call in the 'backend'. In order to display that, after each new dataset is retrieved the list could highlight which instruments have increased in price, and which instruments have decreased in price in comparison with the previous dataset.

### Navigation
On clicking an item from the overview list, a new view should be pushed where some more detailed information about the stock item is displayed. For this view, you are free to display any of the additional fields.

### Assignment
In sum, the following features should be present in your app:

- [ ] List of all instruments is the initial view of the app
- [ ] Poll the endpoint and optional: show increasers and decreasers compared to the previous dataset
- [ ] On selecting an instrument, push a view with more instrument details

The code can be pushed to a repository of your choice. Please send us the link to the repo once you finished the assessment.

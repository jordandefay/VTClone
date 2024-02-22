import { StyleSheet, Text, View, Dimensions, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import {Icon} from 'react-native-elements'
import {colors, parameters} from '../global/styles'
import { StatusBar } from 'expo-status-bar'
import { filterData } from '../global/data'
const SCREEN_WIDTH = Dimensions.get('window').width

const HomeScreen = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
          <View style = {styles.icon1}>
            <Icon type = "material-community"
                  name = "menu"
                  color = {colors.white}
                  size = {40}
            />
          </View>
      </View>
      <ScrollView bounces = {false}>
        <View style = {styles.home}>
          <Text style = {styles.text1}>Votre transport détente !</Text>
          <View style = {styles.view1}>
          <View style = {styles.view8}>
              <Text style = {styles.text2}>Lisez un livre. Admirez la vue et profitez !</Text>
              <View style = {styles.button1}>
                <Text style = {styles.button1Text}>C'est parti !</Text>
              </View>
           </View>
           <View>
              <Image
                style = {styles.image1}
                source = {require('../../assets/uberCar.png')}
              />
           </View>
          </View>

          </View>
            <View>
              <FlatList
                numRows = {4}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data = {filterData}
                keyExtractor={(item) => item.id}
                renderItem={({item})=>(
                  <View style = {styles.card}>
                    <View style = {styles.view2}>
                      <Image style = {styles.image2} source = {item.image} />
                    </View>
                      <View>
                        <Text style = {styles.title}>{item.name}</Text>
                    </View>
                  </View>
              )}
             />
        </View>
        <View style = {styles.view3}>
            <Text>On va où ?</Text>
            <View style = {styles.view4}>
                  <Icon type = "material-community"
                    name = "clock-time-four"
                    color = {colors.grey1}
                    size = {26}
                  />
                  <Text style = {{marginLeft: 5}}>Now</Text>
                  <Icon type = "material-community"
                  name = "chevron-down"
                  color = {colors.grey1}
                  size = {26}
                  />
            </View>
        </View>
      </ScrollView>
        <StatusBar style = "light" backgroundColor='#2058c0' translucent = {true}></StatusBar>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: 30,
        paddingTop : parameters.statusBarHeight
      },
      
      header:{
        backgroundColor: colors.blue,
       // paddingTop: parameters.statusBarHeight,
        height: parameters.headerHeight,
        alignItems: "flex-start"
      },
      
      image1:{
        height: 100,
        width: 100,
      },
      
      image2:{
        height: 60,
        width: 60,
        borderRadius: 30,
      },
      
      home:{
        backgroundColor: colors.blue,
        paddingLeft: 20,
      },
      
      text1:{
        color: colors.white,
        fontSize: 21,
        paddingBottom: 20,
        paddingTop: 20
      },
      
      text2:{
        color: colors.white,
        fontSize: 16,
      },
      
      view1:{
        flexDirection: "row",
        flex: 1,
        paddingTop: 30
      },
      
      button1:{
        height: 40,
        width: 150,
        backgroundColor: colors.black,
        borderRadius: 20,
        alignItems: "center", 
        justifyContent:"center",
        marginTop: 20,
      },
      
      button1Text:{
        color:  colors.white,
        fontSize: 17,
        marginTop: -2,
      
      },
      
      card:{
      
        alignItems: "center",
        margin: SCREEN_WIDTH/22,
      },
      
      view2:{
        marginBottom: 5,
        borderRadius: 15,
        backgroundColor: colors.grey6
      },
      
      title:{
        color:  "black",
        fontSize: 16,
      },
      
      view3:{
        flexDirection:"row",
        marginTop: 5,
        height: 50,
        backgroundColor: colors.grey6,
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 15,
      },
      
      text3:{
        marginLeft: 15,
        fontSize: 20,
        color: colors.black,
      },
      
      view4:{
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 20,
      },
      
      view5:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: 25,
        justifyContent: "space-between",
        marginHorizontal: 15,
        borderBottomColor: colors.grey4,
        borderBottomWidth: 1,
        flex: 1
      },
      
      view6:{
        alignItems:"center",
        flex: 5,
        flexDirection:"row",
      },
      
      view7:{
        backgroundColor: colors.grey6,
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20,
      },
      
      map:{
        height: 150,
        marginVertical: 0,
        width: SCREEN_WIDTH*0.92,
      },
      
      text4:{
        fontSize: 20,
        color: colors.black,
        marginLeft: 20,
        marginBottom: 20,
      },
      
      icon1:{
        marginLeft: 10,
        marginTop: 5,
      },
      
      view8:{
        flex: 4,
        marginTop: -25,
      },
      
      carsAround:{
        width: 28,
        height: 14,
      
      },
      
      location:{
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: colors.blue,
        alignItems: "center",
        justifyContent: "center",
      },
      
      view9:{
        width:4,
        height: 4,
        backgroundColor: "white",
      },
      
      
})
import React from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import NavStyles from '../styles/NavStyles';
import Button from "react-native-button";

interface AppProps {
  navigation: any;
}

export default class Welcome extends React.Component<AppProps> {
  static navigationOptions = {
    title: "Frindi",
    ...NavStyles
  };

  render() {
    const bgImage = require("../../assets/splash.png");
    return (
      
      <ImageBackground 
        source={bgImage} 
        style={styles.background}
      >
        <View
          style={{flex:1, flexDirection:"column"}}
        >
          <View style={styles.logoView}>
            <Image
              source={require("../../assets/logo_frindi.png")}
              style={styles.logoImage}
            />
          </View>
          <View style={styles.container}>
            <Button
              onPress={() => this.props.navigation.navigate('LoginScreen')}
              style={[styles.button,{backgroundColor: "#ff9900", color: "white"}]}
            >
              Already Have Account!
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('RegisterScreen')}
              style={[styles.button,{backgroundColor: "white", color:"#263992"}]}
            >
              Need New Account?
            </Button>
          </View>
        </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 200,
    flexDirection: "column"
  },
  logoView: {
    // flex:1,
    flexDirection:"row",
    alignItems:"stretch",
    alignContent: "center",
    backgroundColor:'rgba(255, 255, 255, 0.3)',
    // paddingTop:40,
    // paddingLeft:35,
    marginTop:30,
    marginHorizontal:37,
    height:115,
    width:300,
    borderRadius:10,
    // flexWrap:"wrap",
    // overflow:"hidden"
  },
  logoImage: {
    // paddingVertical:5,
    marginHorizontal:30,
    marginBottom:4,
    height:"115%",
    width:"83%",
    borderRadius:1
  },
  button: {
    alignContent: "center",
    alignItems: "center",
    fontSize: 16,
    textAlignVertical: "center",
    borderRadius: 2,
    width: 200,
    height: 35,
    marginVertical: 8
  },
  background: {
    height: "100%",
    width: "100%"
  }
});

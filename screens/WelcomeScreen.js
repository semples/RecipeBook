//first screen visible on app, allows user to navigate to viewRecipesSreen and addRecipeScreen
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Button} from 'react-native';
import React, { Component } from 'react';




class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.titleContainer}>
                  <Text style={styles.text}>Welcome!</Text>
                </View>
                <View style={styles.buttonContainer}>
                        <Button title="View Recipes" onPress={() => this.props.navigation.navigate('ViewRecipes')} color="#556b2f"/>
                        <Button title="Add Recipe" onPress={() => this.props.navigation.navigate('AddRecipe')} color="#556b2f" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5dc',

    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50,
        fontFamily: 'ArialRoundedMTBold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: 'black',


    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },
});

export default WelcomeScreen;

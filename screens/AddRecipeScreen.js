/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { View, StyleSheet, FlatList, TextInput, Button } from 'react-native';

import AddRecipeInput from '../components/AddRecipeInput';
import IngredientItem from '../components/IngredientItem';
import { connect } from 'react-redux';


class AddRecipeScreen extends Component {
    constructor(props) {
        super(props);
    }

    press = () => {
        this.props.addRecipeHandler(this.props.recipeName, this.props.ingredients);
        this.props.navigation.navigate('ViewRecipes');
        this.props.resetIngred();
        this.props.resetName();
    };

    render() {

        return (
            <View style={styles.screen}>
                <TextInput
                    placeholder="Recipe Name"
                    onChangeText={(name) => this.props.recipeNameHandler(name)}
                    value={this.props.recipeName}
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <AddRecipeInput onAddIngredient={(ingredientName) => this.props.addIngredientHandler(ingredientName)}
                    />
                </View>
                <View style={styles.list}>
                    <FlatList
                        keyExtractor={(item, index) => item.id}
                        data={this.props.ingredients}
                        renderItem={({ item }) => <IngredientItem name={item.value} />}
                    />
                </View>

                <Button
                    title="Save"
                    onPress={() => { this.press()}}
                    color="#556b2f"
                />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f5f5dc',
    },
    list: {
        width: '100%',
    },
    input: {
        fontFamily: 'ArialRoundedMTBold',
        fontSize: 25,
        height: 40,

    },
    buttonContainer: {
        flexDirection: 'row',
    },

});


function addIngredient(ingredientName) {
    return {
        type: 'ADD_INGREDIENT',
        ingredientName,
    };
}

function addName(recipeName) {
    return {
        type: 'ADD_NAME',
        recipeName,
    };
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes,
        recipeName: state.recipeName,
        ingredients: state.ingredients,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addRecipeHandler: () => dispatch({ type: 'ADD_RECIPE' }),
        addIngredientHandler: (ingredientName) => dispatch(addIngredient(ingredientName)),
        recipeNameHandler: (recipeName) => dispatch(addName(recipeName)),
        resetName: () => dispatch({ type: 'RESET_NAME' }),
        resetIngred: () => dispatch({ type: 'RESET_INGRED' }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeScreen);

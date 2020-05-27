/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

class AddRecipeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enteredIngredient: '',


        };
    }


    ingredientInputHandler = (enteredText) => {
        this.setState({ enteredIngredient: enteredText });
    };

    addIngredientHandler = () => {
        this.props.onAddIngredient(this.state.enteredIngredient);
        this.setState({ enteredIngredient: '' });
    };

    render() {
        return (
            <View>
                <TextInput
                    placeholder="Quantity, Ingredient"
                    onChangeText={this.ingredientInputHandler}
                    value={this.state.enteredIngredient}
                    style={styles.input}
                />
                <Button
                    title="Add Ingredient"
                    onPress={this.addIngredientHandler}
                    color="#556b2f"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        fontFamily: 'ArialRoundedMTBold',
        fontSize: 25,
        borderColor: 'gray',
        height: 40,
        borderRadius: 20,

    },

});

export default AddRecipeInput;

/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IngredientItem = props => {
    return (
        <View style={styles.ingred}>
            <Text style={styles.text}>
                {props.name}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    ingred: {
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderWidth: 2,
        borderColor: '#556b2f',
    },
    text: {
        fontFamily: 'ArialRoundedMTBold',
        fontSize: 20,
    },


});

export default IngredientItem;

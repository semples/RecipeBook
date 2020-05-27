/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { connect } from 'react-redux';



import RecipeItem from '../components/RecipeItem';

class ViewRecipesScreen extends Component {
    constructor(props) {
        super(props);
    }

    createAlert = (recipeName) => {

        Alert.alert(
            'Delete recipe?',
            '',
            [
                {
                    text: 'Delete',
                    onPress: () => this.props.removeRecipeHandler(recipeName),
                },
                {
                    text: 'Cancel',
                },
            ],
        );
    }


    render() {

        return (

            <View style={styles.screen}>
                <FlatList
                    keyExtractor={(item, index) => item.id}
                    data={this.props.recipes}
                    renderItem={({ item }) => <RecipeItem recipeIngredients={item.value} recipeName={item.id} onDelete={() => this.createAlert(item.id)}/>}
                />

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

});

function removeRecipe(recipeName) {
    return {
        type: 'REMOVE_RECIPE',
        recipeName,
    };
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeRecipeHandler: (recipeName) => dispatch(removeRecipe(recipeName)),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewRecipesScreen);

//component that is shown on the viewRecipeScreen, contains recipe name and its ingredients
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight, FlatList } from 'react-native';

import IngredientItem from './IngredientItem';

const Recipe = props => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
            <View>
                <View>
                    <FlatList
                        keyExtractor={(item, index) => item.id}
                        data={props.recipeIngredients}
                        renderItem={({item}) => <IngredientItem name={item.value} />}
                    />
                    <TouchableHighlight
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <Text>Back</Text>
                    </TouchableHighlight>
                </View>
            </View>

            </Modal>
            <TouchableHighlight
                style={styles.item}
                onPress={() => {
                    setModalVisible(true);
                }}
                onLongPress={props.onDelete}
            >
                <Text style={styles.text}>{props.recipeName}</Text>
            </TouchableHighlight>
        </View>

    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding:5,
    },
    text: {
        fontFamily: 'ArialRoundedMTBold',
        fontSize: 30,
        color: '#556b2f',
    },

});

export default Recipe;

/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import AddRecipeScreen from './screens/AddRecipeScreen';
import ViewRecipesScreen from './screens/ViewRecipesScreen';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

const Stack = createStackNavigator();

const initialState = {
    recipes: [],
    recipeName: '',
    ingredients: [],
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return { ...state, recipes: state.recipes.concat({ id: state.recipeName, value: state.ingredients }) };
        case 'ADD_INGREDIENT':
            return { ...state, ingredients: state.ingredients.concat({ id: action.ingredientName, value: action.ingredientName }) };
        case 'ADD_NAME':
            return { ...state, recipeName: action.recipeName };
        case 'RESET_NAME':
            return { ...state, recipeName: '' };
        case 'RESET_INGRED':
            return { ...state, ingredients: [] };
        case 'REMOVE_RECIPE':
            return { ...state, recipes: state.recipes.filter(recipe => recipe.id !== action.recipeName) };
    }
    return state;

};

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

class App extends Component {


    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Home' }} />
                            <Stack.Screen name="AddRecipe" component={AddRecipeScreen} options={{ title: 'Add A Recipe' }} />
                            <Stack.Screen name="ViewRecipes" component={ViewRecipesScreen} options={{ title: 'Your Recipes' }} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        );
    }
}


export default App;


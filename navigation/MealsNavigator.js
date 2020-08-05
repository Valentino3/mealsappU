import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { createDrawerNavigator, } from 'react-navigation-drawer';
import FilterScreen from '../screens/FiltersScreen';


const MealsNavigator = createStackNavigator({
    Categorias: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,

    },

    MealDetail: MealDetailScreen
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'black',
        }
    }
);

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetailScreen: MealDetailScreen,
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'black',
        }
    });



const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo => {
                return <Ionicons name='ios-restaurant'
                    size={21}
                    color={tabInfo.tintColor}

                />
            })
        }
    },
    Favorites: {
        screen: FavNavigator, navigationOptions: {
            tabBarIcon: (tabInfo => {
                return <Ionicons name='ios-star'
                    size={21}
                    color={tabInfo.tintColor}
                />
            })
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor,
    },
});
const FiltersNavigator = createStackNavigator({
    Filters: FilterScreen
});

const MainNavigator = createDrawerNavigator({
    Meals: MealsFavTabNavigator,
    Filters: FiltersNavigator
});

export default createAppContainer(MainNavigator);
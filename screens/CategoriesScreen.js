import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategotyGridTitle from '../components/CategoryGridTile'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';





const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return <CategotyGridTitle title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id
                    }
                })
            }} />;
    };
    return (
        <FlatList data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Categories Screen',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>
    }
};


export default CategoriesScreen;
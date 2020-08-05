import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {
    const meal = props.navigation.getParam('meal');

    return (<View style={styles.screen}>
        <Text>
            {meal.title}
        </Text>
    </View>)
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const meal = navigationData.navigation.getParam('meal')
    return {
        headerRight:
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favorites'
                    iconName='ios-star'
                    onPress={() => {
                        console.log('Mark as favorite!')
                    }}
                />
            </HeaderButtons>,
        headerTitle: meal.title
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default MealDetailScreen;
import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    Alert,
    ActivityIndicator,
    FlatList,
    View,
    SafeAreaView,
    TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { SearchScreenStyle } from "../styles";
import { searchJoke } from '../redux/actions';
import Card from '../components/Card';

const SearchScreen = () => {
    const [query, setQuery] = useState('');

    const dispatch = useDispatch();
    const search = useSelector((state: any) => state.joke);
    const loading = useSelector((state: any) => state.joke.loading);

    const handleOnSubmitEditing = () => {

        if (query.length < 4) {
            Alert.alert('The entered value is less than 4 characters');
            return;
        }

        try {
            dispatch(searchJoke(query) as any);
            console.log('searchJoke', search.searchJoke.result);
        } catch (error) {
            Alert.alert('Oops! Something went wrong', 'Please try again');
        }
    }

    const renderContent = () => {
        if (loading) {
            return (
                <View style={SearchScreenStyle.loading}>
                    <ActivityIndicator
                        size='large'
                        color='#fff'
                    />
                </View>
            );
        } else if (search.searchJoke.total > 0) {
            return (
                <FlatList
                    style={SearchScreenStyle.list}
                    data={search.searchJoke.result}
                    keyExtractor={(item, index) => item.id}
                    renderItem={renderItem}
                />
            );
        } else {
            return (
                <View style={SearchScreenStyle.empty}>
                    <Icon
                        name='search'
                        style={SearchScreenStyle.emptyIcon}
                        size={60}
                    />
                </View>
            );
        }
    }
    type Item = {
        item: {
            id: string;
            value: string;
        }
    };

    const renderItem = ({ item }: Item) => {
        return (
            <Card
                text={item.value}
            />
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                colors={['#383e4b', '#3d434f', '#383e4b']}
                style={SearchScreenStyle.container}>
                <View style={SearchScreenStyle.search}>
                    <TextInput
                        style={SearchScreenStyle.input}
                        placeholder='Search...'
                        value={query}
                        onChangeText={text => setQuery(text)}
                        onSubmitEditing={() => handleOnSubmitEditing()}
                    />
                </View>
                {renderContent()}
            </LinearGradient>
        </SafeAreaView>
    );
}

export default SearchScreen


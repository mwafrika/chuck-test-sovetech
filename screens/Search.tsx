import * as React from 'react';
import {useState,useEffect}  from 'react';
import {
    Alert,
    ActivityIndicator,
    FlatList,
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    TextInput,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

import Repository from '../api/resources';
import Card from '../components/Card';

const SearchScreen = () => {

    const[isLoading, setIsLoading] = useState(false);
    const[query, setQuery] = useState('');
    const[results, setResults] = useState({
        total: 0,
        result: [],
    });
    
    const handleOnSubmitEditing = () => {
      
            if (query.length < 4) {
                Alert.alert('Query string is too short (< 4)')
                return;
            }
    
            setIsLoading(true);
    
            Repository.findFacts(query)
                .then(results => {
                    setIsLoading(false);
                    setResults(results);
                }
                )
                .catch(e => {
                    Alert.alert('Oops! Something went wrong', 'Please try again');
                }
                );
    }

    const renderContent = () => {
        if (isLoading) {
            return (
                <View style={STYLES.loading}>
                    <ActivityIndicator
                        size='large'
                        color='#fff'
                    />
                </View>
            );
        } else if (results.total > 0) {
            return (
                <FlatList
                    style={STYLES.list}
                    data={results.result}
                    keyExtractor={(item, index) => item.id}
                    renderItem={renderItem}
                />
            );
        } else {
            return (
                <View style={STYLES.empty}>
                    <Icon
                        name='search'
                        style={STYLES.emptyIcon}
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
  
    const renderItem = ({item}:Item) => {
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
            style={STYLES.container}>
            <View style={STYLES.search}>
                <TextInput
                    style={STYLES.input}
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

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        margin: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        fontSize: 18,
        color: '#333',
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    empty: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyIcon: {
        color: '#fff'
    },
    list: {
        paddingTop: 20,
    },
    search: {
        backgroundColor: '#333',
    }
})
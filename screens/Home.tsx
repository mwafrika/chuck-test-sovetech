import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    Alert,
    ActivityIndicator,
    Share,
    View,
    Text,
    SafeAreaView
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HomeStyle, CategoryList } from "../styles";
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Categories from '../components/Categories';
import Button from '../components/Button';
import { fetchRandomJoke } from '../redux/actions';

const HomeScreen = () => {

    const [categorie, setCategory] = useState('random');
    const { navigate } = useNavigation();

    const dispatch = useDispatch();
    const randomJoke = useSelector((state: any) => state.joke);

    useEffect(() => {
        loadFact();
    }, [categorie]);
    console.log(randomJoke?.randomJoke?.value, "Check undefienend value")
    const loadFact = () => {
        try {
            dispatch(fetchRandomJoke(categorie) as any);
        } catch (e) {
            Alert.alert('Oops! Something went wrong', 'Please try again');
        }
    }

    const onSelectCategory = (categoryId: string) => {
        dispatch(fetchRandomJoke(categoryId) as any);
        loadFact();
    }

    const onClickShare = () => {
        if (randomJoke.loading) {
            return
        }

        const message = {
            message: randomJoke?.randomJoke?.value,
            url: randomJoke.randomJoke.url,
        }

        const title = {
            subject: 'Chuck Norris fact',
            dialogTitle: 'Share Chuck Norris fact'
        }
        Share.share(message, title);
    }

    const renderContent = () => {
        if (randomJoke.loading) {
            return (
                <View style={HomeStyle.loading}>
                    <ActivityIndicator
                        size='large'
                        color='#fff'
                    />
                    <Text style={HomeStyle.loadingText}>
                        Loading a joke from <Text style={{ fontWeight: 'bold' }}>{categorie}</Text>...
                    </Text>
                </View>
            );
        } else {
            return (
                <Text style={HomeStyle.text}>
                    {randomJoke?.randomJoke?.value}
                </Text>
            );
        }
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                colors={['#383e4b', '#3d434f', '#383e4b']}
                style={HomeStyle.container}>

                <CategoryList>
                    <Categories
                        selected={categorie}
                        onSelectCategory={onSelectCategory}
                        main={false}
                    />
                </CategoryList>

                <View style={HomeStyle.content}>
                    {renderContent()}
                </View>
                <View style={HomeStyle.buttons}>
                    <Button
                        icon='search'
                        onPress={() => navigate('search' as any)}
                        main={false}
                    />
                    <Button
                        icon='repeat'
                        main={true}
                        onPress={() => loadFact()}
                    />
                    <Button
                        icon='upload'
                        onPress={() => onClickShare()} main={false}
                    />
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

export default HomeScreen;


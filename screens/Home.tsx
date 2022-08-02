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
import { HomeStyle, CategoryList } from "../styles";
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Repository from '../api/resources';
import Categories from '../components/Categories';
import Button from '../components/Button';


const HomeScreen = () => {

    const [categorie, setCategory] = useState('random');
    const [isLoading, setIsLoading] = useState(true);
    const [fact, setFact] = useState({
        value: '',
        url: '',
    });
    const { navigate } = useNavigation();

    useEffect(() => {
        loadFact();
    }, [categorie]);

    const loadFact = () => {
        setIsLoading(true);
        Repository
            .getRandomFact(categorie)
            .then(fact => {
                setIsLoading(false);
                setFact(fact);
            }
            )
            .catch(e => {
                Alert.alert('Oops! Something went wrong', 'Please try again');
            }
            );
    }


    const onSelectCategory = (categoryId: React.SetStateAction<string>) => {
        setCategory(categoryId);
        loadFact();
    }

    const onClickShare = () => {
        if (isLoading) {
            return
        }

        const message = {
            message: fact.value,
            url: fact.url,
        }

        const title = {
            subject: 'Chuck Norris fact',
            dialogTitle: 'Share Chuck Norris fact'
        }
        Share.share(message, title);
    }

    const renderContent = () => {
        if (isLoading) {
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
                    {fact.value}
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


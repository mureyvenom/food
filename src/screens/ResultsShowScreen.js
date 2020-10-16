import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import axios from 'axios';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        await axios.get(`https://api.yelp.com/v3/businesses/${id}`, {
            headers: {
                Authorization: 'Bearer HWNUfnY_tTl9PWISq1x2VKCMG1kYr3xAgX0pSUbNWSuYLfVjYefW6uLAByFYT1GNmnM3C8QC0sR1GsKasIvgkvg-cicHMj3vr4m4zudy4Hgm2YiCkFvxD2Rs6nZ8X3Yx'
            }
        })
        .then(response => {
            setResult(response.data);
        }, 
        (error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        getResult(id);
    },
    []);

    if(!result){
        return null;
    }

    return(
        <View>
            <Text>{result.name}</Text>
            <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return(
                    <Image source={{uri: item}} style={styles.image} />
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: '100%'
    }
});

export default ResultsShowScreen;
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultDetail from './ResultsDetail';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {

    if(!results.length){
        return null;
    }

    return(
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({item}) => {
                return (
                <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                    <ResultDetail result={item} />
                </TouchableOpacity>
                );
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    viewStyle: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);
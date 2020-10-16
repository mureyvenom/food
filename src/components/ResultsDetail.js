import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultDetail = ({result}) => {
    
    return(
        <View style={styles.viewStyle}>
            <Image 
            style={styles.imgStyle}
            source={{uri: result.image_url}} 
            />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    imgStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    viewStyle: {
        marginLeft: 15
    }
});

export default ResultDetail;
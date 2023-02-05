import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, Image } from 'react-native';


const DashboardScreen = () => {
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        /* Fetch Popular movies information data from live api */
        const popularMoviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=8518c747faf87ea60c6a1e6c061514ae"
   
        const fetchMoviesData = async () => {
            try {
                const response = await fetch(popularMoviesUrl);
                const moviesData = await response.json();
                // console.log(moviesData);
                if (moviesData?.results) setMoviesData(moviesData.results) // Set and Re render movies data if have
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchMoviesData();

    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'flex-start', margin: 10 }}>
                <Text style={{ fontWeight: "bold" }}>{"Popular Movies"}</Text>
            </View>
            <FlatList
                data={moviesData}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            margin: 10
                        }}>
                        <Image
                            style={styles.imageStyle}
                            source={{ uri: item.poster_path }}
                        // onLoad={setImageLoad(true)}
                        />
                        <Text style={{ textAlign: 'center' }}>{item.title || ""}</Text>
                    </View>
                )}
                numColumns={2}
                keyExtractor={(item, index) => index}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    imageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderWidth: 0.5,
        borderColor: "gray"
    },
});

export default DashboardScreen

import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(webLink: string) {
        Linking.openURL(webLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={styles.container}>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>What's new in Javascript - ES12</Text>
                    </View>
                    <Image
                        source={
                            { uri: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
                        }
                        style={styles.cardImage}
                    />
                    <View style={styles.body}>
                        <Text style={styles.bodyText} numberOfLines={3}>
                            ECMAScript, the standardized version of JavaScript is increasing its popularity and is becoming powerful every day.
                            Since the introduction of ECMAScript 2015 (ES6) which was an immense growth forward,
                            new features are added every year around June. Those features are mostly improvements
                            to the JavaScript language by providing new functions and by expressing things in much simpler way.
                            It also changes the way developers structure the program.
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.touchBox} onPress={() => openWebsite('https://dev.to/naimlatifi5/ecmascript-2021-es12-new-features-2l67')}>
                            <Text style={styles.buttonColor}>Read More</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchBox} onPress={() => openWebsite('https://www.instagram.com/reactnativedevelopers/')}>
                            <Text style={styles.buttonColor}>Follow Me</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        backgroundColor: '#FFBE98',
        color: '#000',
        borderRadius: 8,
        elevation: 5,
        shadowColor: 'magenta',
    },
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        color: '#000',
        paddingHorizontal: 12,
    },
    header: {},
    headerText: {
        alignSelf: 'center',
        color: '#000',
        fontSize: 18,
        fontWeight: '700',
        padding: 8,
    },
    body: {
        padding: 5,
        alignItems: 'center',
    },
    bodyText: {
        color: '#000',
        fontWeight: '500',
    },
    cardImage: {
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
    },
    footerText: {
    },

    touchBox: {
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 4,
        paddingHorizontal: 8,
        borderRadius: 10,
        elevation: 4,
        backgroundColor: 'teal',
    },
    buttonColor: {
        color: '#000',
    },
})
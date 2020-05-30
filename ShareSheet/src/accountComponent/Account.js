import { SafeAreaView, Text } from "react-native"
import { StyleSheet } from "react-native"
import React from "react"
const Account = () =>{
    return (
        <SafeAreaView style={styles.container}>
            <Text>Account page Nme</Text>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red'
    }
})

export default Account;
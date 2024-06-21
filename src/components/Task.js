import React from "react"
import {StyleSheet, View, Text, TouchableWithoutFeedback} from "react-native"
import moment from "moment"
import 'moment/locale/pt-br'
import {Icon} from "react-native-vector-icons/FontAwesome6"

export default props => {
    return(
        <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() =>alert("Olá")}>
            <View style = {styles.checkContainer}>
                <View style = {styles.done}> 
                <icon name = "check" size={20}></icon>
                </View>
            </View>
        </TouchableWithoutFeedback>
        <View>
            <Text style={styles.desc}>{props.description}</Text>
            <Text style={styles.date}>{props.estimate_at + ""}</Text>
            <Text style={styles.date}>{props.date_at + ""}</Text>
        </View>
     
        </View>
    )
}

 const styles = StyleSheet.create({
    container:{
        BorderColor: '#AAA',
        BorderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 20
    },
    desc:{
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#333'
    },
    date:{
        fontFamily: 'Arial',
        color: '#555',

    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    done:{
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        backgroundColor: '#4d7031',
        alignItems: 'center',
        justifyContent: 'center'
    }
 })
import React, {component} from "react"
import {StyleSheet, View, Text, ImageBackground} from "react-native"

import today_Image from '../../assets/imgs/today.jpg'

export default class Task_List extends component{
    // extends component mostra que a classe Task_List está herdando do component
    render(){
        return(
            <View style={styles.container}>
            <ImageBackground source={today_Image} style={styles.background}>

            </ImageBackground>
            <View style={styles.TaskList}>
                <Text>Lista de Tarefas</Text>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    background:{
        flex: 3
    },
    TaskList:{
        flex: 7
    }
})
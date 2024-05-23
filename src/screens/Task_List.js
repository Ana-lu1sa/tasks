import React, {component} from "react"
import {StyleSheet, View, Text} from "react-native"

export default class Task_List extends component{
    // extends component mostra que a classe Task_List está herdando do component 
    render(){
        return(
            <View>
                <Text>Lista de Tarefas</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex: 1
    }
})
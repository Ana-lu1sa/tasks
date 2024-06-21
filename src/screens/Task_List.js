import React, {component} from "react"
import {StyleSheet, View, Text, ImageBackground} from "react-native"
import moment from "moment"
import 'moment/locale/pt-br'
import today_Image from '../../assets/imgs/today.jpg'
import Task from "../components/Task"

export default class Task_List extends component{
    // extends component mostra que a classe Task_List está herdando do component
    render(){
        const today = moment().locale('pt-br').format('ddDd, DD[de] MMMM')
        return(
            <View style={styles.container}>
            <ImageBackground source={today_Image} style={styles.background}>
            <view style={styles.titleBar}>
                <Text style={styles.title}>Hoje</Text>
                <Text style={styles.subTitle}>{today}</Text>
            </view>
            </ImageBackground>
            <View style={styles.TaskList}>
                <Text>Lista de Tarefas</Text>
                <Task
                    description = "Estudar para prova do Hereman"
                    estimate_at={new Date()}
                    done_at={new Date()}
                />
                <Task
                    description= "Fazer a prova do Hereman"
                    estimate_at={new Date()}
                    done_at={null}
                />
                <Task/>
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
    },
    titleBar:{
        flex:1,
        justifyContent: 'flex-end',
    },
    title:{
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#fff',
        marginLeft: 20,
        marginBottom: 20
    },
    subTitle:{
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#fff',
        marginLeft: 20,
        marginBottom: 30
    }
})
import React, {Component} from "react";
import {
     Text,
     TextInput,
      View,
      StyleSheet,
      TouchableOpacity,
      TouchableWithoutFeedback,
      Modal 
    } from "react-native";
 import Icon from "react-native-vector-icons/FontAwesome6";
 import moment from 'moment';
 import DateTimePicker from "@react-native-comunity/DateTimePicker"

    export default class AddTask extends Component{
        render(){
            return(
                <Modal
                    transparent ={true}
                    visible={this.props.visivel}
                    onRequestClose={this.props.cancelar}
                    animationType="slide"
                    >

                    <TouchableWithoutFeedback>
                    onPress={this.props.cancelar}
                        <View style={styles.fundo}></View>
                    </TouchableWithoutFeedback>
                    <View style={styles.principal}>
                        <Text style={styles.cabecalho}>Nova Tarefa</Text>
                        <View style={styles.container}>
                        <Icon name="clipboard-check" size={25}></Icon>
                        <TextInput
                        placeholder="Descrição da tarefa"
                        style={styles.input}
                        >
                        </TextInput>
                        <TouchableOpacity>
                        onPress={this.props.cancelar}
                            <Icon name="calendar" size={25}></Icon>
                            <Text style={styles.data}>Data atual</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.botoes}>
                            <TouchableOpacity>
                            onPress={this.props.cancelar}
                                <Text style={styles.botao}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            onPress={this.props.cancelar}
                                <Text style={styles.botao}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableWithoutFeedback>
                        <View style={styles.fundo}></View>
                    </TouchableWithoutFeedback>
                </Modal>
            )
        }
    }

    const styles = StyleSheet.create({
        fundo: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.7)'
        },
        principal:{
            flex: 2,
            backgroundColor: 'fff'
        },
        cabecalho:{
            backgroundColor: "#B13B44",
            color: '#FFF',
            fontSize: 20,
            textAlign:'center',
            padding: 15

        },
        input:{
            width: '85%',
            margin: 15,
            borderWidth: 1,
            borderColor: '#E3E3E3',
            borderRadius: 6
        },
        container:{
            flexDirection:'row',
            alignItems: 'center',
            marginLeft: 15,
            paddingVertical:10
        },
        botoes :{
            flexDirection:'row',
            justifyContent: 'flex-end'
        },
        botao:{
            margin: 20,
            marginRight: 30,
            color: '#B13B44'
        },
        data:{
            margin: 10
        }

    })
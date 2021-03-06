/**
 * Created by rahul on 26/10/17.
 */
import React from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import {saveDeckTitle} from '../utils/helpers'
import {Constants} from 'expo'

class NewDeck extends React.Component{
    state={
        title:''
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>New Deck!</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Title of the New Deck'
                    value={this.state.title}
                    onChangeText={(text)=>{this.setState({title:text})}}
                />
                <TouchableOpacity
                    style={[styles.button,{backgroundColor:'green'}]}
                    onPress={()=>{
                        saveDeckTitle(this.state.title).then(()=>{
                            this.props.navigation.navigate('Deck',{card:this.state.title,count:0})
                        })
                    }}
                >
                    <Text style={{color:'white'}}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:2,
        flexDirection:'column',
        alignItems:'center',
        padding:20
    },
    input:{
        padding:10,
        alignSelf:'stretch'
    },
    button:{
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin:10
    }
})

export default NewDeck
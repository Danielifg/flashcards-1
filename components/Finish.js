/**
 * Created by rahul on 29/10/17.
 */
import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

class Finish extends React.Component{
    static navigationOptions=({navigation})=>({
        title:'Quiz Done!'
    })
    render(){
        console.log(this.props.navigation.state.params)
        return(
            <View style={styles.container}>
                <Text style={{fontSize:24,textAlign:'center'}}>Hello!</Text>
                <Text style={{textAlign:'center'}}> You have scored: </Text>
                <View style={styles.score}>
                    <Text style={{textAlign:'center',fontSize:64}}>{this.props.navigation.state.params.score} / {this.props.navigation.state.params.maximum}</Text>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        padding:20
    },
    score:{
        
    }
})

export default Finish
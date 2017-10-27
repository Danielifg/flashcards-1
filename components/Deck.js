/**
 * Created by rahul on 26/10/17.
 */

import React from 'react'
import {View,Text} from 'react-native'
import {getDeck} from '../utils/helpers'

class Deck extends React.Component{
    static navigationOptions=({navigation})=>({
        title:`${navigation.state.params.card}`
    })
    constructor(props){
        super(props)
        this.state={
            questions:[]
        }
    }
    componentDidMount(){
        console.log(this.props)
        this.setState({
            questions:getDeck(this.props.navigation.state.params.card)
        })
    }
    render(){
        const {questions}=this.state
        console.log(questions)
        return(
            <View>
                <Text>
                    Deck
                </Text>
                <Text>
                    {this.props.card}
                </Text>
                <Text>{JSON.stringify(questions)}</Text>
            </View>
        )
    }
}

export default Deck
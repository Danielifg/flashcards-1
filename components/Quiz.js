/**
 * Created by rahul on 26/10/17.
 */
import React from 'react'
import {Text,View} from 'react-native'
import {getDeck} from '../utils/helpers'

class Quiz extends React.Component{
    static navigationOptions=({navigation})=>({
        title:`Attempt ${navigation.state.params.card} Quiz`
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
        return(
            <View>
                <Text>
                    Quiz
                </Text>
            </View>
        )
    }
}

export default Quiz
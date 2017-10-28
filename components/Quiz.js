/**
 * Created by rahul on 26/10/17.
 */
import React from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import {getDeck} from '../utils/helpers'

class Quiz extends React.Component{
    static navigationOptions=({navigation})=>({
        title:`Attempt ${navigation.state.params.card} Quiz`
    })
    constructor(props){
        super(props)
        this.state={
            details:[{questions:[]}],
            currentQuestion:1,
            showAnswer:false
        }
    }
    componentDidMount(){
        console.log(this.props)
        this.setState({
            details:getDeck(this.props.navigation.state.params.card)
        })
    }
    render(){
        const {currentQuestion,details} = this.state
        console.log(details[0].questions)
        return(
            <View style={styles.container}>
                <Text>
                    {currentQuestion + '/' + details[0].questions.length}
                </Text>
                <Text style={styles.question}>
                    {(details[0].questions.length>0)&&
                        details[0].questions[currentQuestion-1].question
                    }
                </Text>
                {(this.state.showAnswer)?
                    <TouchableOpacity
                        onPress={()=>{this.setState({showAnswer:false})}}
                    >
                        <Text>Question</Text>
                    </TouchableOpacity>:
                    <TouchableOpacity
                        onPress={()=>{this.setState({showAnswer:true})}}
                    >
                        <Text>Answer</Text>
                    </TouchableOpacity>
                }
                <Text style={{padding:20}}>
                    {this.state.showAnswer&&
                        details[0].questions[currentQuestion-1].answer
                    }
                </Text>
                {(details[0].questions.length>currentQuestion)?
                    <TouchableOpacity
                        onPress={()=>{this.setState({currentQuestion:this.state.currentQuestion+1})}}
                    >
                        <Text>Next</Text>
                    </TouchableOpacity>:
                    <TouchableOpacity><Text>Finish</Text></TouchableOpacity>
                }
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center'
    },
    question:{
        fontSize:24,
        padding:20,
        textAlign:'center'
    }
})

export default Quiz
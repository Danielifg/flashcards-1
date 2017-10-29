/**
 * Created by rahul on 26/10/17.
 */
import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {getDecks} from '../utils/helpers'

class Decklist extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cards:[{questions:[{title:''}]}]
        }
    }
    componentDidMount(){
        getDecks().then(data=>{
            console.log(data)
            this.setState({
                cards:Object.keys(data).map((key)=>(data[key]))
            })
        })
    }
    render(){
        const {cards}=this.state
        return(
            <View>
                {this.state.cards.map(card=>(
                    <TouchableOpacity
                        style={styles.card}
                        onPress={()=>this.props.navigation.navigate('Deck',{card:card.title})}
                        key={card.title}
                    >
                        {console.log(card)}
                        <Text>{card.title}</Text>
                        <Text>{card.questions.length} {(card.questions.length>1)?'cards':'card'}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }
}

const styles=StyleSheet.create({
    card:{
        borderBottomWidth:2,
        borderBottomColor:'#000',
        alignItems:'center',
        padding:15
    }
})

export default Decklist
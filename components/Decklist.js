/**
 * Created by rahul on 26/10/17.
 */
import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {getDecks} from '../utils/helpers'

class Decklist extends React.Component{
    render(){
        const cards=getDecks()
        return(
            <View>
                {cards.map(card=>(
                    <TouchableOpacity
                        style={styles.card}
                        onPress={()=>this.props.navigation.navigate('Deck',{entryId:card.title})}
                        key={card.title}
                    >
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
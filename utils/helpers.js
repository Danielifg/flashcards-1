import {AsyncStorage} from 'react-native'

let decks={
    React:{
        title:'React',
        questions:[
            {
                question:'What is React?',
                answer:'A library for managing user interfaces'
            },
            {
                question:'Where do you make AJAX requests in React?',
                answer:'The componentDidMount lifecycle event'
            }
        ]
    },
    Javascript:{
        title:'Javascript',
        questions:[
            {
                question:'What is a closure?',
                answer:'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
    Movies:{
        title:'Movies',
        questions:[
            {
                question:'Must you talk about Fight Club?',
                answer:'You mustn\'t'
            }
        ]
    }
}

const flashkey='@rahulflashkard:key'

export function getDecks() {
    // List of all decks. Titles, Questions and Answers.
    return AsyncStorage.getItem(flashkey).then((decks) => {
        console.log(decks)
        return JSON.parse(decks)
    })
    // let latestDecks=AsyncStorage.getItem(flashkey).then((result)=>{
    //     let data=JSON.parse(result)
    //     if(data===null){
    //         AsyncStorage.setItem(flashkey,JSON.stringify(decks))
    //         return decks
    //     }
    //     else{
    //         console.log(data)
    //         return data
    //     }
    // })
    // console.log(latestDecks)
    // return latestDecks
}

console.log(getDecks().then(data=>(JSON.parse(data))))

export function getDeck(title){
    console.log(title)
    // Find the deck corresponding to the title from getDecks and return it.
    const newArray=Object.keys(decks).map((deck)=>(decks[deck]))
    console.log(newArray.filter((result)=>result.title===title))
    return newArray.filter((result)=>result.title===title)
}


export function saveDeckTitle(title){
    // Adds a new deck.
    AsyncStorage.mergeItem(
        flashkey,
        {[title]:{}}
    )
}



export function addCardToDeck(title, card){
    // Adds a question to the title.
    const newTitle=getDeck(title)
    const relevant=newTitle[0]
    relevant.questions.push(card)
    AsyncStorage.mergeItem(flashkey,[getDecks(),AsyncStorage.getItem(flashkey),relevant])
}
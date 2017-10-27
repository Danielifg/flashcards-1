import AsyncStorage from 'react-native'

export function getDecks() {
    // List of all decks. Titles, Questions and Answers.
    return [
        {
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
        {
            title:'Javascript',
            questions:[
                {
                    question:'What is a closure?',
                    answer:'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        },
        {
            title:'Movies',
            questions:[
                {
                    question:'Must you talk about Fight Club?',
                    answer:'You mustn\'t'
                }
            ]
        }
    ]
}

export function getDeck(title){
    console.log(title)
    // Find the deck corresponding to the title from getDecks and return it.
    return getDecks().filter((result)=>result.title===title)
}

export function saveDeckTitle(title){
    // Adds a new deck. 
}

export function addCardToDeck(title, card){
    // Adds a question to the title.
}
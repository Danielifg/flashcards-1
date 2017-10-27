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
        }
    ]
}

export function getDeck(id){
    // Find the deck corresponding to the id from getDecks and return it.
    getDecks().filter((result)=>result.id===id)
}

export function saveDeckTitle(title){
    // Adds a new deck. 
}

export function addCardToDeck(title, card){
    // Adds a question to the title.
}
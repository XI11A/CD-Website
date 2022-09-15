import React, { useEffect,useState } from 'react'
import { API_URL, JOKES, QUOTES, RANDOM } from '../constants'
import styles from '../style'

const QuoteJokeService = () => {
    const [quotes, setQuotes] = useState([])
    const [jokes, setJokes] = useState([])

    const QuotesData = () => {
        fetch(API_URL + QUOTES + "/" + RANDOM)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setQuotes(data)
        })
    }

    const JokesData = () => {
        fetch(API_URL + JOKES + "/" + RANDOM)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setJokes(data)
        })
    }

    useEffect(() => {
        QuotesData();
        JokesData();
    }, [])
    console.log(quotes.quotetext)

    const RandomQuotes = () => {
        return(
            <div>
                <p className={`${styles.flexCenter}font-poppins font-bold text-white mt-5 xs:text-[40px] text-[25px] text-gradient uppercase`}>{quotes.quotetext}</p>
                <p className={`${styles.flexEnd} font-poppins font-semibold text-white text-[35px]`}>{quotes.quoteauthor}</p>
            </div>
        )
    }

    const RandomJokes = () => {
        return(
            <div className={`${styles.flexCenter} flex-col`}>
                <p className={`font-poppins font-bold text-white mt-5 xs:text-[35px] text-[20px]`}>{jokes.setup}</p>
                <p className={`font-poppins font-bold text-white mt-5 xs:text-[40px] text-[25px] text-gradient`}>{jokes.punchline}</p>
            </div>
        )
    }

    return(
        <div>
            {location.pathname === "/quote" ?
                <RandomQuotes /> : <RandomJokes />
            } 
        </div>
    )
}

export default QuoteJokeService
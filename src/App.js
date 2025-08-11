
import { useState } from 'react';
import './App.css';

const flashcards = [
  {
    front: "front 1",
    back: "this is the back",
    id: 1,
  },
  {
    front: "front 2",
    back: "this is the back",
    id: 2,
  }
  ,
  {
    front: "front 3",
    back: "this is the back",
    id: 3,
  },
  {
    front: "front 4",
    back: "this is the back",
    id:4,
  }
];


function App() {
  /* 
  This is the idea that I started with. 
  I was looping through each card object, and trying to render in a whole new h1 element. 
  This wasn't really the correct approach. 
  
  const {id, setId} = useState(2);

  function handleClick( id ){
    setId( id );
    console.log(id);
  }

  return (
    <div className="deck">
      { flashcards.map ( (card) => 
        ( card.id === id ? (<h1 className='card-back'> {card.back} </h1> ): 
        (<h1 className='card-front'> {card.front} </h1>) )
      )}
    </div>
  );
  */

  // setting the id var
  /**
   * @constant {number} id - keeping track of the ID of the card that is being looked at. 
   */
  const [id, setId] = useState(0);

  /**
   * when the user clicks on one of the cards, this function will take the ID of that card and set it as the current ID.
   * 
   * @param {number} curId - the ID of the current card
   */
  function handleClick( curId ){
    if ( curId === id){
      setId(0);
    }
    else{
      setId(curId);
    }
  }

  /**
   * Create a div for holding all the cards. 
   * create a div for each individual card. 
   * inside that div, there will a p element that will display the contents of said card. 
   * also, the onClick function on there. 
   * The css is in the div because that's technically the entire card. we are styling the card. 
   */
  return (
    <div className='deck' >
      {flashcards.map( (card) => 
        (
          <div key={card.id} className={ card.id === id ? "card-back" : "card-front"} onClick={ () => handleClick( card.id )}>
            <p>
              {card.id === id ? card.back : card.front}
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default App;

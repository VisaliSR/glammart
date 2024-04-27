import React,{useState} from 'react';
import './Rating.css';
const Rating = () => 
{
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => 
  {
    setRating(value);
  };

  return (
    <div className='rating-container'>
    
      <h3>Rate this page</h3>
      < br></br>

      <div className="rating-stars">
        {['1','2','3','4','5'].map((value) => (
          <span
            key={value}
            className={`star ${value <= rating ? 'selected' : ''}`}
            onClick={() => handleRatingChange(value)}>

            ★
            
          </span>
            
          
        )
        )
        }
      </div>
      <h4>Your rating: {rating}</h4>
      <div>
        <br></br>
        <br></br>
     <label>Feedback</label>
     <br></br>
     <br></br>
     <textarea placeholder='share your feedback' rows={20} cols={50}></textarea>
     <br></br>
     <br></br>
     <center>
     <button>Submit</button></center>
      </div>
      </div>
    );
  }


  export default Rating;

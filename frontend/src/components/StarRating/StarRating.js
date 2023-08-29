import React from 'react'
import classes from './StarRating.module.css';

export default function StarRating({stars,size}) {
  const styles ={
    width: size +'px',
    height: size +'px',
    marginright: size/6 + 'px',
  };

  function Star({number}){

    const halfNumber = number-0.5;
    return stars >= number ?(
        <img src='/star-full.svg' style={styles} alt={number} />
    ) : stars >= halfNumber ?(
        <img src='/star-full.svg' style={styles} alt={number} />
    ) : (
        <img src='/star-full.svg' style={styles} alt={number} />
    );

  }

    return (
    <div className={classes.Rating}>
        {
            [1,2,3,4,5].map(number =>(
                <Star key={number} number={number} />
            ))
        }
    </div>
  )
}

StarRating.defaultProps = {
    size:18,
}
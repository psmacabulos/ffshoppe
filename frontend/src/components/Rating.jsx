const Rating = ({ value, text, color = '#F0C419 ' }) => {
  return (
    <div className='rating'>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span key={starValue}>
            <i
              style={{ color }}
              className={
                starValue <= value
                  ? 'fas fa-star' // value is whole number
                  : starValue === Math.ceil(value) && !Number.isInteger(value) // if the value is 0.5
                  ? 'fas fa-star-half-alt'
                  : 'far fa-star' // did not reach that point of the index
              }
            ></i>
          </span>
        );
      })}
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;

import PropTypes from 'prop-types';
import "../App.css";
import List from './list';

const Card = ({ onClick }) => {
  return (
    <section className="todo-section">
      <input className='text-input' type="text" placeholder="Type task..." />
      <button type="submit" onClick={onClick}>Add</button>
      <ul>{<List />}</ul>
    </section>
  );
};

Card.propTypes = {
  onClick: PropTypes.func
}

export default Card;

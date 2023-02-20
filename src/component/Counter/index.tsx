import * as React from 'react';

export interface ICounter {}

const Counter: React.FunctionComponent<ICounter> = (props) => {
  const [counter, setCounter] = React.useState(0);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div>
      <button data-testid="increment" onClick={incrementCounter}>
        +
      </button>
      <p data-testid="counter">{counter}</p>
      <button disabled data-testid="decrement" onClick={decrementCounter}>
        -
      </button>
    </div>
  );
};

export default Counter;

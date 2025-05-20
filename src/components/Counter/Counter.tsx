import Text from "../Text/Text";
import { CounterProps, StyledCounter } from "./variant";

const Counter = ({ count, onChange, sx }: CounterProps) => {
  const increment = () => onChange(count + 1);
  const decrement = () => onChange(count > 0 ? count - 1 : 0);

  return (
    <StyledCounter style={sx}>
      <button className="circleButton" onClick={decrement}>
        −
      </button>
      <Text variant="body1" className="count">
        {count}
      </Text>
      <button className="circleButton" onClick={increment}>
        +
      </button>
    </StyledCounter>
  );
};

export default Counter;

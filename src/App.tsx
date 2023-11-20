import Counter1 from "./Counter1/Counter1";
import Counter2 from "./Counter2/Counter2";
import Wrapper from "./Wrapper/Wrapper";

export type CounterProps = {
  count: number;
  incrementCount: () => void;
};

function App() {
  function renderCounter1(count: number, incrementCount: () => void): JSX.Element {
    return <Counter1 count={count} incrementCount={incrementCount} />;
  }

  function renderCounter2(count: number, incrementCount: () => void): JSX.Element {
    return <Counter2 count={count} incrementCount={incrementCount} />;
  }

  return (
    <div>
      <Wrapper render={renderCounter1} />
      <Wrapper render={renderCounter2} />
    </div>
  );
}

export default App;

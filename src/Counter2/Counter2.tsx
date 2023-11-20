import { CounterProps } from "../App";

function Counter2(props: CounterProps) {
    return (
        <button onClick={props.incrementCount}>
            Counter_2 : {props.count}
        </button>
    );
}

export default Counter2;

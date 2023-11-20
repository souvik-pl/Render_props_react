import { CounterProps } from "../App";

function Counter1(props: CounterProps) {
    return (
        <button onClick={props.incrementCount}>
            Counter_1 : {props.count}
        </button>
    );
}

export default Counter1;

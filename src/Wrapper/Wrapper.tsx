import { useState } from "react";

type WrapperProps = {
    render: (count: number, incrementCount: () => void) => JSX.Element;
};

function Wrapper(props: WrapperProps) {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }

    return <div>{props.render(count, incrementCount)}</div>;
}

export default Wrapper;

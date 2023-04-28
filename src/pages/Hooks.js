import Counter from "../component/Counter";
import CounterReducer from "../component/CounterReducer";
import FakeUserList from "../component/FakeUserList";

export default function Hooks() {
    return (
        <>
            <h2>Les Hooks</h2>

            <Counter />

            <Counter step={7} />

            <CounterReducer />

            <hr />

            <FakeUserList />
        </>
    );
}
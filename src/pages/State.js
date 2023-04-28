import CounterClass from "../component/CounterClass";

export default function State() {
    return (
        <>
            <h2>Etat Local</h2>

            <CounterClass />

            <CounterClass step="2" />
        </>
    )
}
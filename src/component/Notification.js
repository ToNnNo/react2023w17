export default function Notification({ show = false }) {
    if(!show) {
        return null;
    }

    return (
        <div>
            <strong>Information:</strong> React c'est génial
        </div>
    )
}
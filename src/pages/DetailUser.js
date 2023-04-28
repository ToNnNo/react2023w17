import { useCallback, useEffect, useState } from "react";

export default function DetailUser() {
    const [id, setId] = useState(1);
    const [user, setUser] = useState({});

    function changeId(e) {
        const target = e.target;

        setId(target.value);
    }

    const findUser = useCallback( async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await response.json();
        setUser(user);
    }, [id]);

    useEffect(() => {
        console.log("didMount/didUpdate");
        findUser();
    }, [findUser]);

    return (
        <>
            <h2>Détail User</h2>

            <div className="mb-3">
                <label className="form-label">User ID</label>
                <input type="number" name="id" className="form-control" min="1" max="10"
                    value={id} onChange={changeId} />
            </div>
                
            <hr />

            <table className="table">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{ user.id }</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{ user.name }</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{ user.email }</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
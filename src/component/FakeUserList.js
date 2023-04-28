import { useCallback, useEffect, useState } from "react"

export default function FakeUserList() {

    const [users, setUsers] = useState([]);

    const loadUser = useCallback(async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        setUsers(users);
    }, []);

    useEffect( () => {
        console.log('didMount/didUpdate');

        loadUser();
        /*fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
            return response.json();
        }).then((users) => {
            setUsers(users);
        });*/

        return () => {
            console.log('willUnmount');
        }
    }, [loadUser]); 
    // transmet la fonction à useEffect (dépendance) pour permettre de faire une 
    // comparaison avant l'execution d'une mise à jour (didUpdate)

    return (
        <>
            <h3>Liste des utilisateurs</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( user => (
                            <tr key={user.id}>
                                <td>{ user.id }</td>
                                <td>{ user.name }</td>
                                <td>{ user.email }</td>
                                <td>{ user.phone }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
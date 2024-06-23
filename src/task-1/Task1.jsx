import axios from "axios";
import "./Task1.css";

function render(data) {
    data.forEach((user) => {
        let table = document.querySelector(".users");
        table.innerHTML += `
        <tbody>
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
            </tr>
        </tbody>
        `;
    });
}

function Task1() {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
        render(res.data)
    );
    return (
        <>
            <table className="users">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>website</th>
                    </tr>
                </thead>
            </table>
        </>
    );
}

export default Task1;

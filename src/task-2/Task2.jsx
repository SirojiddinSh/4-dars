import "./Task2.css";
import axios from "axios";

function render(data) {
    console.log(data);
    data.forEach((user) => {
        let container = document.querySelector(".container");
        container.innerHTML += `
        <div>
            <img src="${user.image.medium}" alt="" />
            <h2>Name: ${user.name}</h2>
            <h3>Email: ${user.email}</h3>
            <h2>Rating: ${user.rating.average}</h2>
        </div>
        `;
    });
}

function Task2() {
    axios(" https://api.tvmaze.com/shows").then((res) => render(res.data));
    return (
        <>
            <div className="container"></div>
        </>
    );
}

export default Task2;

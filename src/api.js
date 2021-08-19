let loadUsersApi = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
}

let deleteUserApi = (id) => {
    return fetch("https://jsonplaceholder.typicode.com/users/" + id, {
        method: "DELETE",
    });
}

let changeUserApi = (id, name, email, phone) => {
    return fetch("https://jsonplaceholder.typicode.com/users/" + id, {
        method: "PUT",
        body: JSON.stringify({
          name,
          email,
          phone,
          id
        }),
    });
}

let saveNewUserApi = (id, name, email, phone) => {
    return fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone,
          id
        }),
    });
}

export { loadUsersApi, deleteUserApi, saveNewUserApi, changeUserApi };
let ameer = { name: "Ameer Hamza", surname: "Bugti", id: 1 };
let kashif = { name: "Muhammed Kashif", surname: "Bugti", id: 2 };
let shoaib = { name: "Muhammed Shoaib", surname: "Bugti", id: 3 };

let users = [ ameer, kashif, shoaib ];

let mappedUsers = users.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`, id: user.id,
    };
});

console.log(mappedUsers);
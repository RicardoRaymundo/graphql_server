const users = [
    { id: 1, name: "Diego", email: "ABCD@gmail.com"},
    { id: 2, name: "Zé", email: "ABCDEF@gmail.com"}
];

module.exports = {
    Query: {
        users: () => users,
        user: () => users[0]
    },

    Mutation: {
        createUserX: (_, { name, email }) => {
            console.log("name", name, "email", email);
            users.push({id: 3, "name": name, "email": email})
            return users[2];
        }
    }
};
'use strict';


function generateTask() {

    const users = [];
    for (let i = 0; i < 60;) {
        i++;
        for (let j = 0; j < 10;) {
            const date = new Date();
            const deadline = date.setDate(date.getDate() + j);
            users.push(new Object({
                value: `Task${++j} by User${i}`,
                deadline: new Date(deadline),
                userId: i,
                createdAt: new Date(),
                updatedAt: new Date()
            }));
        }
    }
    return users;
}

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Tasks', generateTask(), {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Tasks', null, {});
    }
};

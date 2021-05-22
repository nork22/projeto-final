/* Neste arquivo iremos codificar a criação do DB */

const Sequelize = require ('sequelize'); // Constante para usar Sequelize
const modelclientes = require ('./models/clientes'); //Rota de nosso modelo de BD

    /* Usando MySQL para BD externa (remotemysql.com) + Sequelize */

const sequelize = new Sequelize(

    '####', // Username
    '####', // Database name
    '####', // Password
    {
        /* Comunicação de  Sequelize com nosso BD */
        host: 'remotemysql.com',
        dialect: 'mysql'
    }

  );

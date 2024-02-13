const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A simple Express API application',
    },
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'The unique identifier for the user.',
            },
            name: { type: 'string', description: 'The name of the user.' },
            email: {
              type: 'string',
              description: 'The email address of the user.',
            },
          },
          required: ['id', 'name', 'email'],
        },
        Todo: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'The unique identifier for the todo item.',
            },
            userId: {
              type: 'string',
              description: 'The identifier for the user this todo belongs to.',
            },
            title: {
              type: 'string',
              description: 'The title of the todo item.',
            },
            completed: {
              type: 'boolean',
              description: 'Whether the todo item has been completed.',
            },
          },
          required: ['id', 'userId', 'title', 'completed'],
        },
      },
    },
  },
  apis: ['./src/interfaces/routes/*.js'], // Path to your API routes
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;

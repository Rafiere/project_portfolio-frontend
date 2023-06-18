import { createServer } from 'miragejs';

export const makeServer = () => {
  return createServer({
    routes() {
      this.namespace = 'v1/';

      this.get('/projects', () => {
        return [
          { id: 1, name: 'ChatGPT' },
          { id: 2, name: 'Calculadora' },
        ];
      });
    },
  });
};

import 'express-async-errors';
import 'dotenv/config';
import express from 'express';
import { router } from './routes/index';
import { globalError } from './middleware/GlobalError';
import swaggerDocs from './swagger.json';
import swaggerUi from 'swagger-ui-express';

class App {
  public app: express.Express;
  constructor() {
    this.app = express();
    this.config();
    this.app.use(express.json());
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    this.app.use(router);
    this.app.use(globalError);
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,DELETE,OPTIONS,PUT,PATCH',
      );
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    this.app.use(accessControl);
  }

  public start(port: string | number): void {
    this.app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  }
}

export { App };

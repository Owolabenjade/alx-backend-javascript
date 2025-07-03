import express from 'express';
<<<<<<< HEAD
import mapRoutes from './routes';
=======
import router from './routes/index.js';
>>>>>>> 539a68b75d8cdeef7a395a48ae79fa11efc7e4fb

const app = express();
const port = 1245;

<<<<<<< HEAD
mapRoutes(app);

app.listen(port);
=======
app.use('/', router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
>>>>>>> 539a68b75d8cdeef7a395a48ae79fa11efc7e4fb

export default app;

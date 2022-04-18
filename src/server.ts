import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = require('./app');
dotenv.config({path: './config.env'})

console.log(process.env.NODE_ENV)
const DB:string = `${process.env.DATABASE_LOCAL}`
console.log(DB)

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('db connected'))
  .catch(err => console.log(err));

  const port:number = 3000
  app.listen(port, () => {
    console.log(`app running on port ${port}`);
  });

//   process.on('SIGTERM', () => {
//     console.log('SIGTERM SHUTTING DOWN GRACEFULLY ✌✌✌✌');
//     server.close(() => {
//       console.log('💣💣💣💣 process terminated');
//     });
//   });
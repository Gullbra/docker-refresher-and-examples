import express, { Application, NextFunction, Request, Response } from 'express'
import { dbConnect } from './mongodb.js'

const app: Application = express()
const port: number = Number(process.env.ENV_PORT) || 3000

app.use(express.json())

app.route('/favicon.ico').get((res: Response) => {return;})
app.route('*')
  .all(dbConnect)
  .get((req: Request, res: Response, next: NextFunction) => res.json({
    message: "hey world! I'm Martin :)", 
    ...req.body
  }))

app.listen(port, () => console.log(`📡 litening to http://localhost:${port}`))
import express from "express"
dotenv.config()

const port = process.env.PORT | 8080;

app = express()
app.use(cors())
app.json()


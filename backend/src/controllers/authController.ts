import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import database from '../config/database'

interface User {
  username: string
  email: string
  password: string
}

const authController = {
  // REGISTER
  registerUser: async (req: Request, res: Response) => {
    try {
      console.log('/v1/auth/register')
      const user: User = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      }

      console.log('user :>> ', user)
      const salt = await bcrypt.genSalt(10)
      const passwordHashed: string = await bcrypt.hash(user.password, salt)
      console.log('passwordHashed :>> ', passwordHashed)
      const query = `insert into users (username, password, admin) values (?, ?, ?)`
      database.executeQuery(query, [user.username, passwordHashed, false])

      res.status(200).json({ user: user })
    } catch (e) {
      res.status(500)
    }
  },
  // LOGIN
  loginUser: async (req: Request, res: Response) => {
    try {
      const query = 'selet * from users where username=?'
      let user = await database.executeQuery(query, [req.body.username])

      if (user.length === 0) {
        res.status(404).send('Wrong username')
        return
      }

      user = user[0]
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      )
      console.log('isValidPassword :>> ', isValidPassword)
      if (isValidPassword) {
        res.status(200).send(`Welcome back ${user.username}`)
        return
      }
      res.status(404).send('Wrong password!')
      return
    } catch (e) {
      console.log('Error here :>> ', e)
    }
  },
}

export default authController

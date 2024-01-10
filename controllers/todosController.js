const { Todo } = require('../models')

class TodosController {
    static async getAll (req,res,next) {
        try {
            const data = await Todo.findAll(
                { where: { status: 'active' } }
            )
            if (data) {
                res.status(200).json(data)
            }
        } catch (err) {
            next(err)
        }
    }

    static async getById (req,res,next) {
        const { id } = req.params
        try {
            const data = await Todo.findByPk(id)
            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }

    static async create (req,res,next) {
        const { title, status } = req.body
        try {
            const newData = await Todo.create(
                { title, status }
            )

            res.status(201).json({newData, message: "Todo Created!"})
        } catch (err) {
            res.status(500).json({message: "Something went wrong", error: err})
        }
    }

    static async delete (req,res,next) {
        const { id } = req.params
        try {
            await Todo.update(
                { status: 'inactive' },
                { where: { id }}
            )

            res.status(200).json({message: 'Todo successfully deleted!'})
        } catch (err) {
            next(err)
        }
    }
}

module.exports = TodosController;
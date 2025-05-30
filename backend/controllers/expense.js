const expenseSchema = require("../models/expenseModel")


exports.addExpense = async (req, res) => {
    const {title, amount, category, description, date} = req.body

    const expense = expenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try{
        //validations
        if(!title || !category || !description || !date){
            return res.status(400).json({
                message: "All fields are required"
            })
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({
                message: "Amount is required"
            })
        }
        await expense.save()
        return res.status(200).json({
            success: true,
            message: "Income added successfully",
            income: expense
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }

    console.log(expense)
}
exports.getExpense = async (req, res) => {
    try{
        const incomes = await expenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        return res.status(500).json({message: "Internal server error"})
    }
}

exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    expenseSchema.findByIdAndDelete(id)
        .then((expense) =>{
            res.status(200).json({
                message: "Income deleted successfully",
            })
        })
        .catch((error) => {
            res.status(500).json({
                message: "Internal server error",
            })
        })
}
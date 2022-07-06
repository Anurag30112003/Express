const asyncHandler = require('express-async-handler')
// @desc Get Goal 
// @route   GET/api/goals
//@access Private

const getGoals =asyncHandler( async (req, res) => {
    
    res.status(200).json({
        'message' :'Get Goal',
    })
})

// @desc Set Goal
// @route POST/api/goal
//@access Private

const setGoal = asyncHandler(async  (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error ('Please add a text field')
        
    }
    res.status(200).json({
        'message':'Post Goal'
    })
})

// @desc Update Goal
// @route PUT/api/goal
// @access  Private

const updateGoal = asyncHandler(async (req,res)=>{
    res.status(200).json({
        'message':`Update goal ${req.params.id} `
    })
})

//  @desc Delete Goal
// @route DELETE/api/goal
// @access Private

const deleteGoal = asyncHandler(async (req,res) => {
    res.status(200).json({
        'message':`Delete Goal ${req.params.id}`
    })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
};
// @desc Get Goal
// @route   GET/api/goals
//@access Private

const getGoals = (req, res) => {
    res.status(200).json({
        'message' :'Get Goal',
    })
}

const setGoal =(req,res)=>{
    res.status(200).json({
        'message':'Post Goal'
    })
}

const updateGoal = (req,res)=>{
    res.status(200).json({
        'message':`Update goal ${req.params.id} `
    })
}

const deleteGoal = (req,res) => {
    res.status(200).json({
        'message':`Delete Goal ${req.params.id}`
    })
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
};
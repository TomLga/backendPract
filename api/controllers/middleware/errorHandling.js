const errorHandler = (err, req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500
    res.json({
        title: "not found",
        msg:err.msg
        
    })

}

module.exports = errorHandler
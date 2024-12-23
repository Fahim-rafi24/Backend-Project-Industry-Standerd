


const asyncHandler = (requestHandler)=>{
    return (req, res, next)=>{
        Promise.resolve(requestHandler(req, res, next)).catch(err => next(err))
    }
}

export {asyncHandler}













// thows are same

// const asyncHandler=(func)=>{()=>{}}
// const asyncHandler=(func)=>()=>{}

// const asyncHandler=(func)=> async(req, res, next)=>{
//     try {
//         return await func(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             massage: error.massage
//         })
//     }
// }
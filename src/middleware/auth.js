const AdminAuth=(req,res,next)=>{
    const token="xyz";
    const isAuthorized = token === "xyz";
    if(!isAuthorized){
        res.status(401).send("Unauthorized access!!")
    }else{
        next();
    }
};

const userAuth=(req,res,next)=>{
    const token="xyez";
    const isAuthorized = token === "xyz";
    if(!isAuthorized){
        res.status(401).send("Unauthorized access!!")
    }else{
        next();
    }
};
module.exports={
    AdminAuth,
    userAuth
}
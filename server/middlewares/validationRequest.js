const validationRequests = (schemes) =>{
    return (req, res, next) =>{
        const { error } = schemes.validate(req.body);

        if(error){
            return res.status(400).json({
                message: "Dados invalidos",
                details: error.details.map((detail) => detail.message) 
            });
        }

        next();
    }
}

module.exports = validationRequests;
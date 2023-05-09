const httpStatus = {
  INTERNAL_SERVER_ERROR:500,
  OK:200,
  BAD_REQUEST:400,
  FORBIDDEN:403,
  UNAUTHORIZED:401
}
module.exports = {
  success: (res,result) => {
    res.status(httpStatus.OK).json(result);
},

}
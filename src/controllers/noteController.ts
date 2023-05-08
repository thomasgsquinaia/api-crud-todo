const sqlFunctions = require('../utils/sql')
const dao = require('../dao/noteDao')

module.exports = {

  getNotes: async (req: unknown, res: unknown, next: unknown ) => {
    let sql : any;
    try {
      sql = await sqlFunctions.getConnection()
      const notes = await dao.getNotes(sql)
      
    } catch (error) {
      if(sql){
      }
      throw error
  
    }
  }
}
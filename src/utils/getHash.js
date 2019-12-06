const crypto = require("crypto")

function getHash(obj = {}){
  const str = JSON.stringify(obj)
  let md5 = crypto.createHash("md5")
  const hash = md5.update(str).digest('hex')
  return hash
}
module.exports = getHash

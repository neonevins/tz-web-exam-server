const crypto = require("crypto")

function getHash(obj = {}){
  const str = JSON.stringify(obj)
  let md5 = crypto.createHash("md5")
  return md5.update(str).digest('hex')
}
module.exports = getHash

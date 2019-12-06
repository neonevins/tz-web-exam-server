

function logout(req, res) {
  res.clearCookie("token",{maxAge: 900000, httpOnly: true})
  res.send({
    code: 0,
    message: "登出成功"
  })
}

module.exports = logout

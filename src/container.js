const t = require("tcomb");

const User =  t.struct({
  name: t.String,
  last_name: t.String,
  email: t.String,
  password: t.maybe(t.String),
  reset_token: t.maybe(t.String),
  isDeleted: t.Boolean,
  createdAt: t.maybe(t.Date),
  updatedAt: t.maybe(t.Date),
});

console.log(user)
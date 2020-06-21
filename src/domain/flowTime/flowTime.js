const { attributes } = require("structure");

const FlowTime = attributes({
  inital_date: Date,
  end_date: Date,
  description: String,
  password: String,
  reset_token: String,
  project: String,
  user_id: String,
  project_id: String,
  isDeleted: Boolean,
  createdAt: Date,
  updatedAt: Date,
})(class FlowTime {});

module.exports = FlowTime;

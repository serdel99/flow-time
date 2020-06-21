const t = require("tcomb");

const Project = ({ project, cleanData }) => {
  const struct = t.struct({
    id: t.String,
    name: t.String,
    slug: t.String,
    createdAt: t.maybe(t.Date),
    updatedAt: t.maybe(t.Date),
  });
  return struct(cleanData(project));
};

module.exports = Project;
const { attributes } = require("structure");

const Project = attributes({
  name: String,
  slug: String,
  isDeleted: Boolean,
  createdAt: Date,
  updatedAt: Date,
})(class Project {});

module.exports = Project;

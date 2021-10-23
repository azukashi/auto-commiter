const simpleGit = require("simple-git");
const jsonfile = require("jsonfile");
const random = require("random");
const moment = require("moment");
const FILE_PATH = "./data.json";

const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();
  const x = random.int(0, 54);
  const y = random.int(0, 6);
  const DATE = moment()
    .subtract(0, "y")
    .add(0, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = {
    date: DATE,
  };

  console.log(DATE);

  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(`chore: ${DATE}`, { "--date": DATE }, makeCommit.bind(this, --n))
      .push();
  });
};

makeCommit(500);

import simpleGit from "simple-git";
import jsonfile from "jsonfile";
import random from "random";
import moment from "moment";
const FILE_PATH: string = "../data/data.json";

const makeCommit = (n: any) => {
  if (n === 0) return simpleGit().push();
  console.log(`\n├─ Commit ${n}\n│`);
  const x: number = random.int(0, 54);
  const y: number = random.int(0, 6);
  const DATE: string = moment()
    .subtract(0.9, "y")
    .add(0, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const formattedDate: string = moment(DATE).format("L");

  const data = {
    date: formattedDate,
  };

  console.log(`└─ Creating commit at : ${formattedDate}...`);

  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(
        `feat: create commit at ${formattedDate}`,
        { "--date": DATE },
        makeCommit.bind(this, --n)
      )
      .push();
  });
};

makeCommit(700);

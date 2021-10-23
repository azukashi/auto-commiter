# GitHub Auto Commiter

Does your GitHub Graph looks like a noob with a few number of Commits and Push? Do you want to have your contribution graph with lots of commit like pro. This project is to your rescue.

## Introduction

The project uses [Moment](https://www.npmjs.com/package/moment), a JavaScript date library for parsing, validating, manipulating, and formatting dates. It allows you to make a commit on past date done by subtracting the years from given date and make commits over a period of regular days. Also you can do alot with this code.

## Requirements

- Node.js v12 or later
- Git

## Installation

Clone and fork the repository to make the changes in your local system.

```sh
$ git clone https://github.com/gifaldyazkaa/auto-commiter.git
$ cd auto-commiter
```
Install All Required Dependecies.


```sh
$ yarn install
```

Run the project to see the magic of moment package.

```sh
$ yarn start
```

Bang !
You can see the commit date in terminal.

## Commits

By Default, While you running `node .`, It will generates `500` GitHub Commits in `0` Past Year.

You can change how many value, or year, days as you wants.

```js
subtract(year, "y");
```

Year here represents the year to start the commits. Greater the value of year, more dense the graph along main axis. Example - subtract(2,'y')

```js
add(days, "d");
```

Difference of commits between timestamps. Less the value of days, more dense the contributon graph will be. Example - add(4,'d')

```js
makeCommit(500);
```

At the end line of `index.js`, You'll see this. This is how many you want to make GitHub Commits. By Default, It's set to `500`. You can change the value to `1000`, higher, or more less.

## Running `node .` Everyday?

Cmon bro, You don't need this. You just need to run once, and Everyday, Idk how, But GitHub will Run and Generates GitHub Commits. You don't need to touch and running `node .` everyday.

## License

This Project is Under [MIT License](https://github.com/gifaldyazkaa/auto-commiter/blob/master/LICENSE) &copy; Gifaldy Azka

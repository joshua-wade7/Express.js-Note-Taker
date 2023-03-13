const fs = require("fs"); //shipped module
const util = require("util"); //shipped module

const readFromFile = util.promisify(fs.readFile);

/**
 * @param {string} destination the file you want to write to.
 * @param {object} content the content you want to write to the file
 * @returns {void} Nothing
 */

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

/**
 *
 * @param {object} content The content you want to append to the file
 * @param {string} file The path to the file you want to save to.
 * @returns {void} Nothing
 */

const readAndAppend = (content, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };

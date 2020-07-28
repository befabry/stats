import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";

//Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");

//Create an instance of MatchReader and pass in somehitng satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log();

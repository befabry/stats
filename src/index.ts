import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./Reporters/ConsoleReport";
import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);
summary.buildAndPrintReport(matchReader.matches);

const summary2 = Summary.winsAnalysisWithHtmlReport("Liverpool");
summary2.buildAndPrintReport(matchReader.matches);

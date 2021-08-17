import { MatchReader } from './MatchReader';
// import { CsvFileReader } from './CsvFileReader';
import { WinsAnalizer } from './analyzers/WinsAnalizer';
import { ConsoleReporter } from './reportTargets/ConcoleReporter';
import { Summary } from './Summary';
// import { HtmlReport } from './reportTargets/HtmlReport';

// Creating an object implementing a DataReader interface
// const csvFileReader = new CsvFileReader('football.csv');

// Creating a MatchReader object with DataReader implimentation
// const matchReader = new MatchReader(csvFileReader);

const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load();

const winAnalizer = new WinsAnalizer('Man United');

const consoleReporter = new ConsoleReporter();
const summary = new Summary(winAnalizer, consoleReporter);
summary.buildAndPrintReport(matchReader.matches);


// const htmlSummary = new Summary(winAnalizer, new HtmlReport());
// htmlSummary.buildAndPrintReport(matchReader.matches);
Summary.winsAnalysisWithHtmlReport('Man United').buildAndPrintReport(matchReader.matches);
import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./util";
import { MatchResult } from "./MatchResults";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow = (line:string[]): MatchData => { 
    return [
      dateStringToDate(line[0]),
      line[1],
      line[2],
      parseInt(line[3]),
      parseInt(line[4]),
      line[5] as MatchResult,
      line[6]
    ];
  }
}
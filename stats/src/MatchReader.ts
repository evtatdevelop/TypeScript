import { dateStringToDate } from './util';
import { MatchResult } from './MatchResults';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {

  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }

  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load = (): void => {
    this.reader.read();
     this.matches = this.reader.data.map((line: string[]): MatchData => [
      dateStringToDate(line[0]),
      line[1],
      line[2],
      parseInt(line[3]),
      parseInt(line[4]),
      line[5] as MatchResult,
      line[6]
    ]);
  }



}
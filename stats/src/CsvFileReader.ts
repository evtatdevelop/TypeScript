import fs from 'fs';
import { dateStringToDate } from './util';
import { MatchResult } from './MatchResults';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];
  constructor(public fileName: string) {}

  read = (): void => {
    this.data = fs.readFileSync(this.fileName, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((line: string): string[] => line.split(','))
    .map((line: string[]): MatchData => [
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
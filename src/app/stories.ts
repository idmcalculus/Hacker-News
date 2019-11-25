export class Story {
  id: number;
  title: string;
  url: string;
  score: number;
  descendants: number;
  time: number;
  timeISO: string;
  by: By;
  today: number;
  thisHour: number;
  unixHour: number;
}


export class By {
  id: string;
}

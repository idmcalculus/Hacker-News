export class Story {
  id: number;
  title: string;
  url: string;
  score: number;
  descendants: number;
  timeISO: string;
  by: By;
  today: number;
  thisHour: number;
}


export class By {
  id: string;
}

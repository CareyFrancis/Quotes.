export class Quote {
  public showDescription: boolean;
  constructor(public id: number, public author: string, public quote: string, public submitter: string, public completeDate: Date) {
    this.showDescription = false;
  }
}

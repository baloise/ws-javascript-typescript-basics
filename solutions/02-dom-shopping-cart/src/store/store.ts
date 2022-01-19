type Observer = () => void;

export abstract class Store<T extends Object> {
  protected state: T;
  protected observers: Observer[] = [];

  constructor() {
    const data = this.data();
    this.state = data as T;
  }

  protected abstract data(): T;

  public getState(): T {
    return { ...this.state } as T;
  }

  public subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((item) => {
      if (item !== observer) {
        return item;
      }
    });
  }

  public notify() {
    this.observers.forEach((observer) => observer());
  }
}

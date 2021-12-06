import { Store } from "./store";

class MyStore extends Store<{ value: number }> {
  protected data(): { value: number } {
    return { value: 42 };
  }
}

describe("Store", () => {
  let myStore: MyStore;
  beforeEach(() => {
    myStore = new MyStore();
  });

  test("should have initial values", () => {
    expect(myStore.getState()).toEqual({ value: 42 });
  });

  test("should not have called observer", () => {
    const subscriberMock = jest.fn();
    myStore.subscribe(subscriberMock);
    expect(subscriberMock).toHaveBeenCalledTimes(0);
  });

  test("should call observer once", () => {
    const subscriberMock = jest.fn();
    myStore.subscribe(subscriberMock);
    myStore.notify();
    expect(subscriberMock).toHaveBeenCalledTimes(1);
  });

  test("should not call observer due to unsubscribe", () => {
    const subscriberMock = jest.fn();
    myStore.subscribe(subscriberMock);
    myStore.unsubscribe(subscriberMock);
    myStore.notify();
    expect(subscriberMock).toHaveBeenCalledTimes(0);
  });
});

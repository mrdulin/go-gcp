import { nonenumerable } from '../../../../decorators/nonenumerable';

class Person {
  @nonenumerable
  public getKidCount(): number {
    return 42;
  }

  public getAge(): number {
    return 23;
  }
}

export { Person };

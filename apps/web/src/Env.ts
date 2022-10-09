export class Env {
  private static readonly INSTANCE = new Env();

  static get() {
    return Env.INSTANCE;
  }

  private constructor() {}

  isProduction = import.meta.env.PROD;

  isDev = import.meta.env.DEV;
}

export default Env;

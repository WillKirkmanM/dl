import IDebugLoggerOptions from "./Typings/Interfaces/IDebugLoggerOptions";

export class DebugLogger {
  // Options
  private readonly enabled: boolean;
  private readonly logLevel: number;
  private readonly prefixMessage: string;

  constructor(options: IDebugLoggerOptions) {
    const { enabled, logLevel, prefixMessage, } = options;

    this.enabled = enabled;
    this.logLevel = logLevel;
    this.prefixMessage = prefixMessage;

    if (!this.enabled) return;
  } 
  
  public log(logLevel: number, message: string, type?: string) {
    if (this.logLevel >= logLevel) {
      if (type) {
        return process.stdout.write(`${type} - ${message}\n`);
      }
      return process.stdout.write(`${this.prefixMessage}${message}\n`);
    }
  }
}

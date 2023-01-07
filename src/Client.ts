import IDebugLoggerOptions from "./Typings/Interfaces/IDebugLoggerOptions";

export class DebugLogger {
  // Options
  private enabled: boolean;
  private logLevel: number;
  private prefixMessage: string;

  constructor(options: IDebugLoggerOptions) {
    const { enabled, logLevel, prefixMessage } = options;
    
    this.enabled = enabled;
    this.logLevel = logLevel;
    this.prefixMessage = prefixMessage;
    if (!this.enabled) return;
  } 
  
  public log(logLevel: number, message: string) {
    if (this.logLevel >= logLevel) {
      process.stdout.write(`${this.prefixMessage}${message}\n`);
    }
  }
}

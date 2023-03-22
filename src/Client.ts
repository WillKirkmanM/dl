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

  public log(logLevel: number, message: string, type?: string, timestamp?: boolean) {
    if (this.logLevel >= logLevel) {
      let out: string = "";

      out += this.prefixMessage + ""

      if (type) {
        out += `[${type}]` + " "
      }

      if (timestamp) {
        // Date Time 
        // 2023-03-22 19:07:55
        let today = new Date()

        let day = today.getDay()
        let month = today.getMonth()
        let year = today.getFullYear()

        let hours = today.getHours()
        let minutes = today.getMinutes()
        let seconds = today.getUTCSeconds()

        out += `${day}/${month}/${year} ${hours}:${minutes}:${seconds}` + " "

        out += message

        return process.stdout.write(out + "\n");
      }
    }
  }
}

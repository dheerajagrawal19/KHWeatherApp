export class WeatherData {
    value: number;
    year: number;
    month: number;
    public getLabel(): string {
        return "" + this.month + "'" + this.year;
    }
}
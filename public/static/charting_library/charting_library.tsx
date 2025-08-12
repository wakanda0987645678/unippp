// TradingView Charting Library Type Definitions
// This is a simplified version for basic functionality

export type ResolutionString = "1" | "3" | "5" | "15" | "30" | "45" | "1H" | "2H" | "3H" | "4H" | "1D" | "1W" | "1M"

export interface ChartingLibraryWidgetOptions {
  symbol: string
  datafeed?: any
  interval?: ResolutionString
  container?: string | HTMLElement
  library_path?: string
  locale?: string
  disabled_features?: string[]
  enabled_features?: string[]
  charts_storage_url?: string
  charts_storage_api_version?: string
  client_id?: string
  user_id?: string
  fullscreen?: boolean
  autosize?: boolean
  studies_overrides?: any
  width?: number
  height?: number
  theme?: "light" | "dark"
  custom_css_url?: string
  loading_screen?: {
    backgroundColor?: string
    foregroundColor?: string
  }
  overrides?: any
  studies_access?: {
    type: "black" | "white"
    tools: any[]
  }
  drawings_access?: {
    type: "black" | "white"
    tools: any[]
  }
  saved_data?: any
  numeric_formatting?: {
    decimal_sign?: string
  }
  customFormatters?: {
    timeFormatter?: any
    dateFormatter?: any
  }
  time_frames?: any[]
  chart_style?: number
  timezone?: string
  debug?: boolean
  snapshot_url?: string
  custom_indicators_getter?: (PineJS: any) => Promise<any[]>
}

// Additional commonly used types
export interface IChartingLibraryWidget {
  onChartReady(callback: () => void): void
  headerReady(): Promise<void>
  chart(): IChartApi
  setSymbol(symbol: string, interval: ResolutionString, callback: () => void): void
  remove(): void
  save(callback: (state: any) => void): void
  load(state: any): void
  getSavedCharts(callback: (charts: any[]) => void): void
  loadChartFromServer(chartRecord: any): void
  saveChartToServer(
    onComplete?: () => void,
    onFail?: (error: string) => void,
    saveAsSnapshot?: boolean,
    options?: any,
  ): void
}

export interface IChartApi {
  setVisibleRange(range: any, callback?: () => void): void
  getVisibleRange(): any
  priceFormatter(): any
  chartType(): number
  setChartType(type: number): void
  resolution(): ResolutionString
  setResolution(resolution: ResolutionString, callback?: () => void): void
  resetData(): void
  executeActionById(actionId: string): void
  getCheckableActionState(actionId: string): boolean
  refreshMarks(): void
  clearMarks(): void
  setTimezone(timezone: string): void
  getTimezone(): string
  canZoomOut(): boolean
  zoomOut(): void
  resetTimeScale(): void
}

// Mock widget class for development
export class TradingViewWidget {
  private options: ChartingLibraryWidgetOptions

  constructor(options: ChartingLibraryWidgetOptions) {
    this.options = options
    console.log("TradingView Widget initialized with options:", options)
  }

  onChartReady(callback: () => void): void {
    // Simulate chart ready after a short delay
    setTimeout(callback, 100)
  }

  remove(): void {
    console.log("TradingView Widget removed")
  }

  chart(): IChartApi {
    return {
      setVisibleRange: () => {},
      getVisibleRange: () => ({}),
      priceFormatter: () => ({}),
      chartType: () => 1,
      setChartType: () => {},
      resolution: () => "1D" as ResolutionString,
      setResolution: () => {},
      resetData: () => {},
      executeActionById: () => {},
      getCheckableActionState: () => false,
      refreshMarks: () => {},
      clearMarks: () => {},
      setTimezone: () => {},
      getTimezone: () => "Etc/UTC",
      canZoomOut: () => true,
      zoomOut: () => {},
      resetTimeScale: () => {},
    }
  }
}

// Default export for the widget
export default TradingViewWidget

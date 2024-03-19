import { TimeSpanPathOptions, TimeSpanHeaderOptions } from "./types"

export const timeSpanOptions = {
  week: {
    path: "week" as TimeSpanPathOptions,
    header: "Week" as TimeSpanHeaderOptions
  },
  month: {
    path: "month" as TimeSpanPathOptions,
    header: "Month" as TimeSpanHeaderOptions
  },
  year: {
    path: "year" as TimeSpanPathOptions,
    header: "Year" as TimeSpanHeaderOptions
  }
}
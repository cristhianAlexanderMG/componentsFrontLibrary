export abstract class EnumerablesTypesApp {
  static enumSeverity = {
    Primary: "",
    Secondary: "Secondary",
    Success: "Success",
    Info: "Info",
    Warning: "Warning",
    Help: "Help",
    Danger: "Danger",
  }

  static enumTypeData = {
    number: "number",
    string: "string",
    boolean: "boolean"
  }

  static enumSize = {
    Small: "Small",
    Normal: "Normal",
    Large: "Large",
  }

  static enumTypeInput = {
    Text: "text",
    Password: "password",
    Number: "number",
    Date: "date",
    Email: "email"
  }

  static enumPosition = {
    Top: "Top",
    Bottom: "Bottom",
    Right: "Right",
    Left: "Left",
    Up: "Up",
    UpRight: "UpRight",
    UpLeft: "UpLeft",
    Down: "Down",
    DownRight: "DownRight",
    DownLeft: "DownLeft",
  }

  static enumTypeWord = {
    Title: "Title",
    Subtitle: "Subtitle",
    Normal: "Normal"
  }

  static enumTypeAlignment = {
    Start: "Start",
    Center: "Center",
    End: "End",
  }

  static enumTextTransform = {
    Normal: "Normal",
    Lowercase: "Lowercase",
    Uppercase: "Uppercase",
    Capitalize: "Capitalize",
  }

  static enumTextDecoration = {
    Normal: "Normal",
    Underline: "Underline",
    Link : "Link",
  }

  static enumTypeColumnTable = {
    Input: "Input",
    Dropdown: "Dropdown",
    Calendar: "Calendar"
  }

  static enumStatusResponseData = {
    success: "200",
    error: "500",
    notFound: "400"
  }
}

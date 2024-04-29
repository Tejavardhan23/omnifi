import * as React from "react";
import * as Types from "./types";

declare function Nav(props: {
  as?: React.ElementType;
  buttonVisibility?: Types.Visibility.VisibilityConditions;
  launchApp?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;

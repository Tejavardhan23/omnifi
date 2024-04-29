import * as React from "react";
import * as Types from "./types";

declare function Navbar(props: {
  as?: React.ElementType;
  buttonText?: React.ReactNode;
  buttonVisibility?: Types.Visibility.VisibilityConditions;
  buttonLaunchApp?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;

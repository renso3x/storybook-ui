import React from "react";
import { ThemeWrapper } from "../src/themes";
export const decorators = [(Story) => <ThemeWrapper>{Story()}</ThemeWrapper>];

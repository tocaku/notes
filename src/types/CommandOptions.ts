import { SelectionRange } from "./SelectionRange";

export interface TextState {
  text: string;

  selection: SelectionRange;
}

export interface TextController {
  /**
   
 @param text 
   */
  replaceSelection(text: string): TextState;

  /**
   * @param selection
   */
  setSelectionRange(selection: SelectionRange): TextState;

  getState(): TextState;
}

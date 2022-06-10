import { EdmDate } from "../models";
import { BaseDataTypeSetup } from "./base-datatype-setup";

/**
 * @classdesc Sets up the breeze DataType.Date enum symbol.
 * @see {DataType.Date}
 */
export class DateDataTypeSetup extends BaseDataTypeSetup {
  public name = "Date";

  public fmtOData = (val: any) => (val ? EdmDate.create(val).toString() : null);
}

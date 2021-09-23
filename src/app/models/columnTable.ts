export interface ColumnTable {
  // mandatory // object attribute name
  field: any;

  // mandatory // column title name
  header: any;

  // mandatory // type of column (Input, Dropdown, Checkbox, etc)
  type: any;

  // mandatory only use when is type Input // determine type of input (Number, Text, Date, etc)
  typeInput: any;

  // mandatory // define if attribute is required
  required: any;

  // mandatory // define if attribute is disabled
  disabled: any;

  // mandatory only use when is type Dropdown // define the list of items to choose
  items: any;

  // mandatory only use when is type Dropdown // define the example element of the list
  object: any;

  // mandatory only use when is type Dropdown // define the attribute to show in the dropdown
  labelSelected: any;

  // mandatory only use when is type Dropdown // column the title
  nameLabel: any;
}

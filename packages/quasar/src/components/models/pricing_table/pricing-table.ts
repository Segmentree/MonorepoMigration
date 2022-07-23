export type columnValue = { [key: string]: number | string };

interface Col {
  value: Array<columnValue>;
  printableValue?: { type: string; value: string };
}

interface Row {
  label: string;
  tooltip?: string;
  color?: string;
  columns: Col[];
}

export interface PricingTableSection {
  label: string;
  icon?: { filename: string };
  rows: Row[];
}

export interface PricingTableHead {
  label: string;
  link?: string;
  active?: boolean;
  activeCornerLabel: string;
  btnLabel?: string;
  external: boolean;
}

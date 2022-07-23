export type AwardSection = {
  text: string;
  logo: string;
  hover: string;
};

export interface AwardsNominationsAndPricesConfig {
  title: string;
  sections: Array<AwardSection>;
  logos_mobile: string;
}

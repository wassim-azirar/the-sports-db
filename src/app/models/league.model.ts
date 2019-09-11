export interface League {
  leagues?: Array<LeagueEntity>;
}

export interface LeagueEntity {
  idLeague:             string;
  strLeague:            string;
  strSport:             string;
  strLeagueAlternate?:  string | null;
  strBanner?:           string | null;
  strBadge?:            string | null;
  strLogo?:             string | null;
  strPoster?:           string | null;
  strComplete?:         string | null;
}

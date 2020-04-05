export interface Team {
  teams?: Array<TeamEntity> | null;
}
export interface TeamEntity {
  idTeam: string;
  idSoccerXML: string;
  intLoved?: string | null;
  strTeam: string;
  strTeamShort?: string | null;
  strAlternate: string;
  intFormedYear: string;
  strSport: string;
  strLeague: string;
  idLeague: string;
  strDivision?: null;
  strManager: string;
  strStadium: string;
  strKeywords: string;
  strRSS: string;
  strStadiumThumb: string;
  strStadiumDescription: string;
  strStadiumLocation: string;
  intStadiumCapacity: string;
  strWebsite: string;
  strFacebook: string;
  strTwitter: string;
  strInstagram: string;
  strDescriptionEN: string;
  strDescriptionDE?: string | null;
  strDescriptionFR?: null;
  strDescriptionCN?: null;
  strDescriptionIT?: string | null;
  strDescriptionJP?: null;
  strDescriptionRU?: null;
  strDescriptionES?: string | null;
  strDescriptionPT?: null;
  strDescriptionSE?: null;
  strDescriptionNL?: null;
  strDescriptionHU?: null;
  strDescriptionNO?: null;
  strDescriptionIL?: null;
  strDescriptionPL?: null;
  strGender: string;
  strCountry: string;
  strTeamBadge: string;
  strTeamJersey: string;
  strTeamLogo: string;
  strTeamFanart1: string;
  strTeamFanart2: string;
  strTeamFanart3: string;
  strTeamFanart4: string;
  strTeamBanner: string;
  strYoutube: string;
  strLocked: string;
}
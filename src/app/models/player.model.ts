export interface Player {
  player?: Array<PlayerEntity> | null;
}
export interface PlayerEntity {
  idPlayer: string;
  idTeam: string;
  idTeamNational?: null;
  idSoccerXML: string;
  idPlayerManager?: string | null;
  strNationality: string;
  strPlayer: string;
  strTeam: string;
  strTeamNational?: null;
  strSport: string;
  intSoccerXMLTeamID?: string | null;
  dateBorn: string;
  strNumber?: string | null;
  dateSigned?: string | null;
  strSigning: string;
  strWage: string;
  strOutfitter?: string | null;
  strKit?: string | null;
  strAgent?: string | null;
  strBirthLocation: string;
  strDescriptionEN: string;
  strDescriptionDE?: null;
  strDescriptionFR?: string | null;
  strDescriptionCN?: null;
  strDescriptionIT?: null;
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
  strSide?: string | null;
  strPosition: string;
  strCollege?: null;
  strFacebook: string;
  strWebsite: string;
  strTwitter: string;
  strInstagram: string;
  strYoutube: string;
  strHeight: string;
  strWeight: string;
  intLoved: string;
  strThumb: string;
  strCutout?: string | null;
  strRender?: string | null;
  strBanner?: string | null;
  strFanart1?: string | null;
  strFanart2?: string | null;
  strFanart3?: string | null;
  strFanart4?: string | null;
  strCreativeCommons?: string | null;
  strLocked: string;
}
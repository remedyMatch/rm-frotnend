import {Institution} from "./Institution";
import {InstitutionStandort} from "./InstitutionStandort";

export interface Anfrage {
    id: string;
    kommentar: string;
    institutionVon: Institution;
    institutionAn: Institution;
    bedarfId?: string;
    angebotId?: string;
    artikelId: string;
    standortAn: InstitutionStandort;
    standortVon: InstitutionStandort;
    entfernung: number;
    prozessInstanzId: string;
    anzahl: number;
    status: string;
}
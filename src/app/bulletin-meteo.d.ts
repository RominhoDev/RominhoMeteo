import { Ville } from "./ville";

export interface BulletinMeteo {
    ville: Ville;
    resume: string;
    temperature: number;
    ressenti: number;
    humidite: number;
}
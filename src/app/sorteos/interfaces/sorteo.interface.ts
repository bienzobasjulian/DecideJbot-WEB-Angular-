import { User } from "@firebase/auth";

export interface Sorteo {
    id?: number;
    titulo ?: string;
    participantes : string[];
    usuario ?: User;
}
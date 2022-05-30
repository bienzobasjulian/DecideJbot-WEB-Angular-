import { User } from "@firebase/auth";

export interface Sorteo {
    id?: string;
    titulo ?: string;
    participantes : string[];
    usuario ?: User;
}
import { Contact, ContactGetDto } from "./contact"

/** Nuevo grupo de contactos */
export type NewGroup = Omit<Group, "id" | "contacts">

/** Grupo de contactos */
export interface Group{
  id: number,
  contacts: Contact[]
  name: string,
  description?: string,
}

/** Grupo de contactos según el back */
export interface GroupGetDto {
  id: number,
  name: string,
  ownerId: number
  description?: string,
  contacts?: ContactGetDto[]
}

/** Nuevo grupo de contactos según el back */
export interface GroupPostDto {
  Name: string;
  Description?: string;
}

/** Grupo de ejemplo sin datos */
export const GRUPO_VACIO: Group = {
  name: "",
  id: 0,
  contacts: []
};
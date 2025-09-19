/** Datos de usuario */
export interface User {
  email: string,
  firstName: string,
  lastName: string
}

export type State = "Active" | "Archived" | "Confirmed";


/** Respuesta del back de post/put un USER */
export interface UserPostRes{
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  state: State,
}

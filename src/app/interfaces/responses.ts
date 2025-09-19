/** Clase genérica que representa la respuesta de una solicitud
 * @param success Nos dice si la solicitud fue exitosa o no
 * @param message Si queremos poner alguna descripción (en texto) de la solicitud iría acá
 * @param data varía según lo que estés respondiendo, nos da flexibilidad de uso para esta interfaz
 */
export interface ResponseData<T = undefined>{
  success: boolean,
  message: string,
  data?: T
}
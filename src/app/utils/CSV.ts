export function descargarCSV(nombre:string,csvContent:string){
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', nombre+'.csv');
  document.body.appendChild(link);
  link.click();
}
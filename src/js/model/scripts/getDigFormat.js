// Форматирование цифр типа 100 000 000
export function getDigFormat(item) {
   return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}

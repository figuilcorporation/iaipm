import Swal from "sweetalert2";

export const alert = (type: string, message: string) => {
    Swal.fire({
        title: type,
        text: message,
        timer: 3000,
    });
};

export const toastAlert = (type: string, message: string) => {
    Swal.fire({
        title: type,
        text: message,
        timer: 3000,
    });
};

export const confirmAction = async (
    message = "You really what to delete this?"
) => {
    const res = await Swal.fire({
        // title: 'Confirmation',
        text: message,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Supprimer",
        confirmButtonColor: "#f97316",
        cancelButtonText: "Annuler",
    });
    if (res.isConfirmed) {
        return true;
    }
};

/**
 * Filters an array of objects (one level-depth) with multiple criteria.
 *
 * @param  {Array}  array: the array to filter
 * @param  {Object} filters: an object with the filter criteria
 * @return {Array}
 */
export function filterPlainArray(data: any, filters: any, search: string): any  {
    return data.filter((item: any) => {
        return filters.some((key: any) => {
            return item[key]?.toLowerCase()?.match(search.toLowerCase());
        });
    });
}

export function capitalize(str: string){
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
}

export function formatDate(dateToFormat: any, options = {month: 'long', day: '2-digit', year: 'numeric'} ){
    const newDate = typeof dateToFormat !== 'object' ? new Date(dateToFormat) : dateToFormat;
    return capitalize(newDate.toLocaleString("fr-FR", options))
}

export function formatDateWithDayName(dateToFormat: any, options = {weekday: 'long' ,month: '2-digit', day: '2-digit', year: 'numeric'} ){
    const newDate = typeof dateToFormat !== 'object' ? new Date(dateToFormat) : dateToFormat;
    return capitalize(newDate.toLocaleString("fr-FR", options))
}

export function formatDateShorthly(dateToFormat: any, options = {month: '2-digit', day: '2-digit', year: 'numeric'} ){
    const newDate = typeof dateToFormat !== 'object' ? new Date(dateToFormat) : dateToFormat;
    return capitalize(newDate.toLocaleString("fr-FR", options))
}

export function formatNumber(numberToFormat: any, options = {month: 'long', day: '2-digit', year: 'numeric'} ){
    return numberToFormat.toLocaleString("fr-FR", {month: '2-digit', day: '2-digit', year: 'numeric'});
}

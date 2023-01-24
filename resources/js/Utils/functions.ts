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
export function filterPlainArray(array: any, filters: any, search: string) {
    return array.filter((item: any) => {
        return filters.some((key: any) => {
            return item[key]?.toLowerCase()?.match(search.toLowerCase());
        });
    });
}

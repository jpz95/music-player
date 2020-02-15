export default {
    getVisibleColumns(columns) {
        const visibleColumnsArr = Object.entries(columns)
            .filter(([, values]) => !values.hidden)
            .map(([field, ]) => field);

            return new Set(visibleColumnsArr);
    }
}
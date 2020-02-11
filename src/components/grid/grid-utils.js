export default {
    getVisibleColumns(columns) {
        return Object.entries(columns)
            .filter(([, values]) => !values.hidden);
    }
}
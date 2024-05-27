

interface GetMaxDateProps {
    Year: number;
    Month: number;
}

export const getMaxDate = ({ Year, Month }: GetMaxDateProps): number => {
    const date = new Date();
    const effectiveYear = Year ?? date.getFullYear();
    const effectiveMonth = Month ?? date.getMonth() + 1;
    const lastDate = new Date(effectiveYear, effectiveMonth, 0);
    return lastDate.getDate();
};
export default {
    formatCurrency: function(num: number) {
        return '$' + Number(num.toFixed(2).toLocaleString() + ' ');
    }
}
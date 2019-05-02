// Write a class called "BillCalculator" that will have calculateBillTotal method.
// BillCalculator will be configured by passing taxRate and tipRate.
// const texasBillCalculator = new BillCalculator(0.095, 0.15);
// texasBillCalculator.calculateBillTotal(20); --> 24.9

class BillCalculator {
    constructor(taxRate, tipRate) {
        this.taxRate = taxRate;
        this.tipRate = tipRate;
    }

    calculateBillTotal(amount) {
        return amount + this.taxRate * amount + this.tipRate * amount;
    }
}

const texasBillCalculator = new BillCalculator(0.095, 0.15);
texasBillCalculator.calculateBillTotal(20);
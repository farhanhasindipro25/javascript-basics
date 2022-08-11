function woodCalculator(chairQty, tableQty, bedQty){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQty * perChairWood;
    const tableWood = tableQty * perTableWood;
    const bedWood = bedQty * perBedWood;

    totalWoodQty = chairWood + tableWood + bedWood;
    return totalWoodQty
}

const totalWood = woodCalculator(2, 2, 5);
console.log("Total wood required:",totalWood);
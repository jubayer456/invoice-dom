const date = new Date();
document.getElementById('show-date').innerText = date.toLocaleDateString();
document.getElementById('submit').addEventListener('click', function () {
    const buyerField = document.getElementById('buyer-details');
    const buyerFieldValue = buyerField.value;
    const invoiceField = document.getElementById('buyer-info');
    invoiceField.innerText = buyerFieldValue;
    buyerField.value = '';
})
document.getElementById('addBtn').addEventListener('click', function () {
    const itemField = document.getElementById('item');
    const priceField = document.getElementById('price');
    const quantityField = document.getElementById('quantity');
    const infoTable = document.getElementById('info-table');
    if (itemField < 0 || itemField == '' || priceField < 0 || priceField == '' || quantityField < 0 || quantityField == '' || isNaN(priceField) || isNaN(quantityField)) {
        alert(`sorry ,,,please enter a valid input`);
        return;
    }
    const totalPrice = parseInt(quantityField.value) * parseInt(priceField.value);
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th scope="row">${itemField.value}</th>
    <td>${priceField.value}</td>
    <td>${quantityField.value}</td>
    <td class="item-total">${totalPrice}</td>`;
    infoTable.appendChild(tr);
    totalCalculation();
});
function totalCalculation() {
    const subTotal = subtotal();
    const subTotalField = document.getElementById('sub-total');
    subTotalField.innerText = subTotal;
    const tax = subTotal * .2;
    const taxField = document.getElementById('tax');
    taxField.innerText = tax;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = tax + subTotal;
    const grandTotal2 = document.getElementById('grand-total-2');
    grandTotal2.innerText = grandTotal.innerText;
}
function subtotal() {
    let total = 0
    const cost = document.getElementsByClassName('item-total');
    for (const item of cost) {
        total = total + parseInt(item.innerText);
    }
    return total;
}
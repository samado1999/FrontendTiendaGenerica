async function postData() {
    const response = await fetch('http://localhost:9090/api/productos/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            buyPrice: "string",
            id: "string",
            iva: "string",
            productCode: "string",
            productName: "string",
            sellPrice: "string",
            supplierNit: "string"
        })
    });
    const data = await response.json();
    console.log(data);
}

function parseProduct() {
    
}
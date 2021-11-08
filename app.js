async function postData(list) {
    const response = await fetch('http://localhost:9090/api/productos/saveAll', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(list)
    });
    console.log('RESPONSE: ' + response.body);
}

function cargarArchivo() {
    var list = [];
    var csv = fileupload.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
        var text = event.target.result;
        const rows = text.slice(0).split("\n");
        for (var i = 0; i < rows.length; i++) {
            var fields = rows[i].split(",");
            const prod = new Object();
            prod.productCode = String(fields[0].trim());
            prod.productName = String(fields[1].trim());
            prod.supplierNit = String(fields[2].trim())
            prod.buyPrice = String(fields[3].trim());
            prod.iva = String(fields[4].trim());
            prod.sellPrice = String(fields[5].trim());
            list.push(prod);
        }
        console.log('LIST: ' + JSON.stringify(list));
        postData(list);
    }
    reader.readAsText(csv);
}
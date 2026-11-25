// база даних //
var aircraft = {
    f16f: {
        plname: 'F-16 Fighting Falcon',
        descrip: 'insert description',
        img: 'insert image',
        specs: [
            ["Екіпаж", "1 пілот"],
            ["Довжина", "15,03 м"],
            ["Розмах крила", "9,96 м"],
            ["Максимальна швидкість", "близько 2 120 км/год"],
            ["Країна виробництва", "США"]
        ]
    },
    mig29f: {
        plname: 'МіГ-29',
        descrip: 'insert description',
        img: 'insert image',
        specs: [
            ["insert", "info"],
        ]
    },
    su27f: {
        plname: 'Су-27',
        descrip: 'insert description',
        img: 'insert image',
        specs: [
            ["insert", "info"],
        ]
    },
    m2000f: {
        plname: 'Dassault Mirage 2000',
        descrip: 'insert description',
        img: 'insert image',
        specs: [
            ["insert", "info"],
        ]
    },

    su24c: {
        plname: 'Су-24',
        descrip: 'insert description',
        img: 'insert image',
        specs: [
            ["insert", "info"],
        ]
    },
    su25c: {
        plname: 'Су-25',
        descrip: 'insert description',
        img: 'insert image',
        specs: [
            ["insert", "info"],
        ]
    },

    asc890i: {
        plname: 'ASC 890',
        descrip: 'insert description',
        img: 'insert image',
        specs: [
            ["insert", "info"],
        ]
    },
    an30i: {
        plname: 'Ан-30',
        descrip: 'insert description',
        img: 'insert image',
        specs: [
            ["insert", "info"],
        ]
    },

    an70t: {
        plname: 'Ан-70',
        descrip: 'insert description',
        img: 'insert image',
        specs: [
            ["insert", "info"],
        ]
    },
    an26t: {
        plname: 'Ан-26',
        descrip: 'insert description',
        img: 'insert image',
        specs: [
            ["insert", "info"],
        ]
    },
    an24t: {
        plname: 'Ан-24',
        descrip: 'insert description',
        img: 'insert image',
        specs: [
            ["insert", "info"],
        ]
    },
    g650t: {
        plname: 'Gulfstream G650',
        descrip: 'insert description',
        img: 'insert image',
        specs: [
            ["insert", "info"],
        ]
    },

    mi8r: {
        plname: 'Мі-8',
        descrip: 'insert description',
        img: 'insert image',
        specs: [
            ["insert", "info"],
        ]
    },

    tb2u: {
        plname: 'Bayraktar TB2',
        descrip: 'insert description',
        img: 'insert image',
        specs: [
            ["insert", "info"],
        ]
    },
}

// відкриття модальних вікон //
function openPlane(id) {
    var plane = aircraft[id];

    document.getElementById("plname").innerText = plane.plname;
    document.getElementById("descrip").innerHTML = plane.descrip;
    document.getElementById("img").src = plane.img;

    const tableContainer = document.getElementById("table-container");

    tableContainer.innerHTML = `
    <table>
        <tbody>
            ${plane.specs.map(spec => `
                <tr>
                    <th>${spec[0]}</th>
                    <td>${spec[1]}</td>
                </tr>
            `).join("")}
        </tbody>
    </table>
`;
    document.getElementById("background").style.display = "block";
}

// закриття модальних вікон //
function closePlane() {
    document.getElementById("background").style.display = "none";
}




// список моделей які нам треба буде додати //
/*
  Винищувачі:
  f-16, міг-29, су-27, mirage 2000
  Ударні:
  су-24, су-25
  Розвідка:
  asc 890, ан-30
  Транспорт:
  ан-70, ан-26, ан-24, gulfstream g650
  Гелікоптери:
  мі-8
  БпЛА:
  bayraktar tb2
*/
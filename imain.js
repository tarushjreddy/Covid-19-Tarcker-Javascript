console.log("heelo bro")

function updatemap() {
    fetch("dataone.json")
        .then(response => response.json())
        .then(response => {
            // console.log(response.data)
            response.data.forEach(element => {

                latitude = element.latitude;
                longitude = element.longitude;
                cases = element.infected;
                details = element.name;
                // details = detailss.bold()
                recovered = element.recovered;
                deaths = element.pop;
                update = element.lastUpdated;



                if (cases > 100) {
                    color = "red"
                }
                else if (cases > 25 && cases < 50) {
                    color = "orange"
                }
                else {
                    color = "green"

                }
                if (cases > 100) {
                    code = ` ${details}` + ` has ${recovered} Recoveries, ${cases} Cases and ${deaths} Deaths is an covid 19 red zone Please wear mask and maintain social Distancing
                    Last Updated ${update}`
                }
                else if (cases > 25 && cases < 50) {
                    code = ` ${details}` + ` has ${recovered} Recoveries, ${cases} Cases and ${deaths} Deaths is an covid 19 orange zone Please wear mask and maintain social Distancing
                    Last Updated ${update}`
                }
                else {
                    code = ` ${details}` + ` has ${recovered} Recoveries, ${cases} Cases and ${deaths} Deaths is an covid 19 green zone Please wear mask and maintain social Distancing
                    Last Updated ${update}`

                }







                var popup = new mapboxgl.Popup({ offset: 25, popup: true }).setText(
                    code


                );
                // create DOM element for the marker
                var el = document.createElement('div');
                el.id = 'marker';


                var marker = new mapboxgl.Marker({
                    draggable: false,
                    color: color,


                })

                    .setLngLat([longitude, latitude])
                    .addTo(map)
                    .setPopup(popup); //
                // var popup = new mapboxgl.Popup({ offset: 25 }).setText(
                //     'Construction on the Washington Monument began in 1848.'
                // );



                // // create the marker
                // new mapboxgl.Marker(el)
                //     .setLngLat(monument)
                //   sets a popup on this marker
                //     .addTo(map);









            })
        })
}
updatemap();

details();

// =----------
function details() {
    fetch('https://my-json-server.typicode.com/developerking9/indiacovid/IndiaCaseReport/1')
        .then(function (resp) {
            return resp.json();
        }).then(function (data) {
            // console.log(data)
            // let obj = JSON.arr(data);
            // console.log(obj)
            // let myJSON = JSON.stringify(obj);
            const propertyNames = Object.keys(data);
            console.log(propertyNames)
            const propertyNamess = Object.values(data);
            console.log(propertyNames[2]);
            console.log(propertyNamess)
            // for (i = 1; i < propertyNames.length; i++) {
            // console.log(propertyNames[i]);
            // console.log(propertyNamess[i]);
            // console.log(`${propertyNames[i]} and ${propertyNamess[i]}`)
            console.log(`${propertyNamess[1]}`)
            // let inu = document.createElement('h2')
            // inu.innerHTML = `${propertyNames[i]} and ${propertyNamess[i]}`;
            var paraa = document.createElement("p");                 // Create a <p> element
            paraa.innerHTML = `${propertyNamess[1]}`;
            document.getElementById('Headding').appendChild(paraa);


            var paras = document.createElement("p");                 // Create a <p> element
            paras.innerHTML = `${propertyNamess[2]}`;
            document.getElementById('Positive').appendChild(paras);


            var parasg = document.createElement("p");                 // Create a <p> element
            parasg.innerHTML = `${propertyNamess[4]}`;
            document.getElementById('Recovered').appendChild(parasg);


            var parasgg = document.createElement("p");                 // Create a <p> element
            parasgg.innerHTML = `${propertyNamess[3]}`;
            document.getElementById('Dead').appendChild(parasgg);

            // }

        })

}
// / =----------
detailss();
function detailss() {
    fetch('https://my-json-server.typicode.com/developerking9/karnatakacoviddata/IndiaCaseReport/1')
        .then(function (resp) {
            return resp.json();
        }).then(function (data) {
            // console.log(data)
            // let obj = JSON.arr(data);
            // console.log(obj)
            // let myJSON = JSON.stringify(obj);
            const propertyNames = Object.keys(data);
            console.log(propertyNames)
            const propertyNamess = Object.values(data);
            console.log(propertyNames[2]);
            console.log(propertyNamess)
            // for (i = 1; i < propertyNames.length; i++) {
            // console.log(propertyNames[i]);
            // console.log(propertyNamess[i]);
            // console.log(`${propertyNames[i]} and ${propertyNamess[i]}`)
            console.log(`${propertyNamess[1]}`)
            // let inu = document.createElement('h2')
            // inu.innerHTML = `${propertyNames[i]} and ${propertyNamess[i]}`;
            var paraa = document.createElement("p");                 // Create a <p> element
            paraa.innerHTML = `${propertyNamess[1]}`;
            document.getElementById('Headdingg').appendChild(paraa);


            var paras = document.createElement("p");                 // Create a <p> element
            paras.innerHTML = `${propertyNamess[2]}`;
            document.getElementById('Positivee').appendChild(paras);


            var parasg = document.createElement("p");                 // Create a <p> element
            parasg.innerHTML = `${propertyNamess[4]}`;
            document.getElementById('Recoveredd').appendChild(parasg);


            var parasgg = document.createElement("p");                 // Create a <p> element
            parasgg.innerHTML = `${propertyNamess[3]}`;
            document.getElementById('Deadd').appendChild(parasgg);

            // }

        })

}
detailsss()
function detailsss() {
    fetch('https://my-json-server.typicode.com/developerking9/maharashtracoviddata/MaharastraCaseReport/1')
        .then(function (resp) {
            return resp.json();
        }).then(function (data) {
            // console.log(data)
            // let obj = JSON.arr(data);
            // console.log(obj)
            // let myJSON = JSON.stringify(obj);
            const propertyNames = Object.keys(data);
            console.log(propertyNames)
            const propertyNamess = Object.values(data);
            console.log(propertyNames[2]);
            console.log(propertyNamess)
            // for (i = 1; i < propertyNames.length; i++) {
            // console.log(propertyNames[i]);
            // console.log(propertyNamess[i]);
            // console.log(`${propertyNames[i]} and ${propertyNamess[i]}`)
            console.log(`${propertyNamess[1]}`)
            // let inu = document.createElement('h2')
            // inu.innerHTML = `${propertyNames[i]} and ${propertyNamess[i]}`;
            var paraa = document.createElement("p");                 // Create a <p> element
            paraa.innerHTML = `${propertyNamess[1]}`;
            document.getElementById('Headdinggg').appendChild(paraa);


            var paras = document.createElement("p");                 // Create a <p> element
            paras.innerHTML = `${propertyNamess[2]}`;
            document.getElementById('Positiveee').appendChild(paras);


            var parasg = document.createElement("p");                 // Create a <p> element
            parasg.innerHTML = `${propertyNamess[4]}`;
            document.getElementById('Recovereddd').appendChild(parasg);


            var parasgg = document.createElement("p");                 // Create a <p> element
            parasgg.innerHTML = `${propertyNamess[3]}`;
            document.getElementById('Deaddd').appendChild(parasgg);

            // }

        })

}

detailssss()
function detailssss() {
    fetch('https://my-json-server.typicode.com/developerking9/gujuratcasedata/gujuratcasereport/1')
        .then(function (resp) {
            return resp.json();
        }).then(function (data) {
            // console.log(data)
            // let obj = JSON.arr(data);
            // console.log(obj)
            // let myJSON = JSON.stringify(obj);
            const propertyNames = Object.keys(data);
            console.log(propertyNames)
            const propertyNamess = Object.values(data);
            console.log(propertyNames[2]);
            console.log(propertyNamess)
            // for (i = 1; i < propertyNames.length; i++) {
            // console.log(propertyNames[i]);
            // console.log(propertyNamess[i]);
            // console.log(`${propertyNames[i]} and ${propertyNamess[i]}`)
            console.log(`${propertyNamess[1]}`)
            // let inu = document.createElement('h2')
            // inu.innerHTML = `${propertyNames[i]} and ${propertyNamess[i]}`;
            var paraa = document.createElement("p");                 // Create a <p> element
            paraa.innerHTML = `${propertyNamess[1]}`;
            document.getElementById('Headdingggg').appendChild(paraa);


            var paras = document.createElement("p");                 // Create a <p> element
            paras.innerHTML = `${propertyNamess[2]}`;
            document.getElementById('Positiveeee').appendChild(paras);


            var parasg = document.createElement("p");                 // Create a <p> element
            parasg.innerHTML = `${propertyNamess[4]}`;
            document.getElementById('Recoveredddd').appendChild(parasg);


            var parasgg = document.createElement("p");                 // Create a <p> element
            parasgg.innerHTML = `${propertyNamess[3]}`;
            document.getElementById('Deadddd').appendChild(parasgg);

            // }

        })

}


detailsssss()
function detailsssss() {
    fetch('https://my-json-server.typicode.com/developerking9/tamilnaducoviddata/TamilnaduCaseReport/1')
        .then(function (resp) {
            return resp.json();
        }).then(function (data) {
            // console.log(data)
            // let obj = JSON.arr(data);
            // console.log(obj)
            // let myJSON = JSON.stringify(obj);
            const propertyNames = Object.keys(data);
            console.log(propertyNames)
            const propertyNamess = Object.values(data);
            console.log(propertyNames[2]);
            console.log(propertyNamess)
            // for (i = 1; i < propertyNames.length; i++) {
            // console.log(propertyNames[i]);
            // console.log(propertyNamess[i]);
            // console.log(`${propertyNames[i]} and ${propertyNamess[i]}`)
            console.log(`${propertyNamess[1]}`)
            // let inu = document.createElement('h2')
            // inu.innerHTML = `${propertyNames[i]} and ${propertyNamess[i]}`;
            var paraa = document.createElement("p");                 // Create a <p> element
            paraa.innerHTML = `${propertyNamess[1]}`;
            document.getElementById('Headdinggggg').appendChild(paraa);


            var paras = document.createElement("p");                 // Create a <p> element
            paras.innerHTML = `${propertyNamess[2]}`;
            document.getElementById('Positiveeeee').appendChild(paras);


            var parasg = document.createElement("p");                 // Create a <p> element
            parasg.innerHTML = `${propertyNamess[4]}`;
            document.getElementById('Recovereddddd').appendChild(parasg);


            var parasgg = document.createElement("p");                 // Create a <p> element
            parasgg.innerHTML = `${propertyNamess[3]}`;
            document.getElementById('Deaddddd').appendChild(parasgg);

            // }

        })

}
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 9000);
}

function showPage() {
    document.getElementById("loader").style.display = "flex";
    document.getElementById("myDiv").style.display = "block";
}


detailssssss()
function detailssssss() {
    fetch('https://my-json-server.typicode.com/developerking9/andhrapradeshcasedata/IndiaCaseReport/1')
        .then(function (resp) {
            return resp.json();
        }).then(function (data) {
            // console.log(data)
            // let obj = JSON.arr(data);
            // console.log(obj)
            // let myJSON = JSON.stringify(obj);
            const propertyNames = Object.keys(data);
            console.log(propertyNames)
            const propertyNamess = Object.values(data);
            console.log(propertyNames[2]);
            console.log(propertyNamess)
            // for (i = 1; i < propertyNames.length; i++) {
            // console.log(propertyNames[i]);
            // console.log(propertyNamess[i]);
            // console.log(`${propertyNames[i]} and ${propertyNamess[i]}`)
            console.log(`${propertyNamess[1]}`)
            // let inu = document.createElement('h2')
            // inu.innerHTML = `${propertyNames[i]} and ${propertyNamess[i]}`;
            var paraa = document.createElement("p");                 // Create a <p> element
            paraa.innerHTML = `${propertyNamess[1]}`;
            document.getElementById('Headdingggggg').appendChild(paraa);


            var paras = document.createElement("p");                 // Create a <p> element
            paras.innerHTML = `${propertyNamess[2]}`;
            document.getElementById('Positiveeeeee').appendChild(paras);


            var parasg = document.createElement("p");                 // Create a <p> element
            parasg.innerHTML = `${propertyNamess[4]}`;
            document.getElementById('Recoveredddddd').appendChild(parasg);


            var parasgg = document.createElement("p");                 // Create a <p> element
            parasgg.innerHTML = `${propertyNamess[3]}`;
            document.getElementById('Deadddddd').appendChild(parasgg);

            // }

        })

}
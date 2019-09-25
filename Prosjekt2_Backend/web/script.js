function setNameVariable() {
    if((sessionStorage.getItem("username")) && (document.querySelector(".linkLogin").innerHTML == "Sign in")) {
        document.querySelector(".linkLogin").innerHTML = sessionStorage.getItem("username");
    }

    if((sessionStorage.getItem("username") != null) && (window.location.pathname == "/Prosjekt1_Frontend/.idea/src/frontpage.html")) {
        document.getElementById("createListingBtn").style.display = "block";
    }
}

function showContact() {
    var contactBtn = document.querySelector('.contactBtn'),
        contactInfo = document.querySelector('.contactInfo');

    contactBtn.style.display = 'none';
    contactInfo.style.display = 'block';
}

function setName() {
    var name = document.getElementById("username").value.toString();
    sessionStorage.setItem("username", name);

    document.querySelector(".linkLogin").innerHTML = name;

    window.location.replace("/Prosjekt1_Frontend/.idea/src/frontpage.html");
}

function goToCreateListing() {
    window.location.replace("/Prosjekt1_Frontend/.idea/src/createListing.html");
}

function previewImages(filess) {
    var preview = document.getElementById('imgInput');

    if (filess) {
        var i = 0;
        [].forEach.call(filess, readAndPreview);
    }

    function readAndPreview(file) {
        var imgNumberFunction = "selectedItems(" + i + ")";

        // Make sure `file.name` matches our extensions criteria
        if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
            return alert(file.name + " is not an image");
        } // else...

        var reader = new FileReader();

        reader.addEventListener("load", function() {
            var image = document.createElement("img");
            image.setAttribute("src", this.result);
            image.setAttribute("class", "inputImages");
            image.setAttribute("onclick", imgNumberFunction);
            preview.appendChild(image);
        });

        reader.readAsDataURL(file);

        i++;
    }

}

function selectedItems(imgNumber) {
    var selected = [];

    var integer = parseInt(imgNumber, 10);

    if (selected.includes(integer)) {
        selected.splice(imgNumber, 1);
    } else {
        selected.push(integer);
    }

    console.log(selected);
}

function deleteAll() {
    document.getElementById("inp").outerHTML =
        '<input type="file" name="img" class="imgInp" id="inp" multiple onchange="previewImages(this.files)" value="">';

    document.getElementById("imgInput").innerHTML = "";
}
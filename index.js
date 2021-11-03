function displayinfo() {
    let name = peru.name.nativeName.aym.official;
    let nameh1 = document.createElement("h1");
    nameh1.textContent = name;
    document.body.append(nameh1);

    let capital = peru.capital;
    let capitalh1 = document.createElement("h1");
    capitalh1.textContent = capital;
    document.body.append(capitalh1);

    let altSpellings = peru.altSpellings;
    let altSpellingsh1 = document.createElement("h1");
    altSpellingsh1.textContent = altSpellings;
    document.body.append(altSpellingsh1);

    }
window.addEventListener("load", displayinfo);

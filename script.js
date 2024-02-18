console.log("Hello world");

const jmeno = prompt ("Zadej křestní jméno bez diakritiky");
const prijmeni = prompt ("Zadej příjmení bez diakritiky");
const domena = "@fit.cvut.cz"

console.log(jmeno);
console.log(prijmeni);

console.log(jmeno.trim().toLocaleLowerCase().slice(0,3));
console.log(prijmeni.trim().toLocaleLowerCase().slice(0,5));

document.body.innerHTML = `<p> emailová adresa:  ${prijmeni.trim().toLocaleLowerCase().slice(0,5)}${jmeno.trim().toLocaleLowerCase().slice(0,3)}${domena} </p>`
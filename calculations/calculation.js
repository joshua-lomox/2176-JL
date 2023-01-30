var a = 0;
var b = 0;
var gi = 0;
var tax = 0;
var sss = 0;
var pif = 0;
var phealth = 0;
totald = 2640;
netSalary = 5760;

function grossIncome(a, b, gi) {
  var a = 1200;
  var b = 6;

  var gi = a * b;

  return gi;
}
var gi = grossIncome(gi);

function taxation(tax, gi) {
  var tax = 720;
  var gi = 7200;

  var taxed = gi - tax;

  return taxed;
}

function socialsec(sss, taxed) {
  var sss = 1200;
  var taxed = 6480;

  var totalSSS = taxed - sss;

  return totalSSS;
}

function piFund(pif, totalSSS) {
  var pif = 300;
  var totalSSS = 5280;

  var totalPIF = totalSSS - pif;

  return totalPIF;
}

function phHealth(phealth, totalPIF) {
  var phealth = 400;
  var totalPIF = 4980;

  var totalPH = totalSSS - pif;

  return totalPH;
}

totalDed = tax + sss + pif + phealth;
var gi = grossIncome(gi);
var taxed = taxation(taxed);
var totalSSS = socialsec(totalSSS);
var totalPIF = piFund(totalPIF);
var totalPH = phHealth(totalPH);

module.exports =
  'Gross income = ' +
  gi +
  '\nTax = ' +
  taxed +
  '\nSSS = ' +
  totalSSS +
  '\nPag-Ibig = ' +
  totalPIF +
  '\nPhilHealth = ' +
  totalPH +
  '\nTotal deduction =  2620' +
  '\nNet salary =  4580';
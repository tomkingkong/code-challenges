## Astrological Sign Finder
### Rules  
Write a function that will take month/day inputs and output the associated Astrological Sign.  
Months will be provided as either a number or an abbreviation - (ex. January: 1 or 'JAN').  
Days will be provided only as a number.
If an illegal date is used, return false.

#### Example:  
For February 5th
astroSignFinder(FEB, 5) //aquarius
astroSignFinder(2, 5) //aquarius
astroSignFinder(FEBR, 5) //false

### Solution
Using JavaScript's Map object I was able to create a set of key value pairs  
where only 1 key would evaluate to TRUE given the month/day provided. 

```
const astroSignFinder = (month, day) => {
  if(month < 1 || month > 12) return false;
  if(day < 1 || day > 31) return false;

  const thirtyOne = [1, 3, 5, 7, 8, 10, 12];
  const calendar = { 'JAN':1, 'FEB':2, 'MAR':3, 'APR':4, 
  'MAY':5, 'JUN':6, 'JUL':7, 'AUG':8, 'SEP':9, 'OCT':10, 'NOV':11, 'DEC':12 };
  const monthNum = calendar[month] || month;
  const dayNum = day.toString().length < 2 ? "0"+day : day;

  if (thirtyOne.includes(monthNum) && day > 31) {
    return false;
  } else {
    if (day > 30) return false;
    if (monthNum === 2 && dayNum > 29) return false;
  }
  
  const date = parseInt(`${monthNum}`+`${dayNum}`);

  const astroMap = new Map();

  astroMap
	.set((120 < date && date < 219), 'aquarius')
	.set((218 < date && date < 321), 'pisces')
	.set((320 < date && date < 421), 'aries')
	.set((420 < date && date < 521), 'taurus')
	.set((520 < date && date < 621), 'gemini')
	.set((621 < date && date < 723), 'cancer')
	.set((722 < date && date < 824), 'leo')
	.set((823 < date && date < 924), 'virgo')
	.set((923 < date && date < 1024), 'libra')
	.set((1023 < date && date < 1123), 'scorpio')
	.set((1122 < date && date < 1222), 'sagittarius')
	.set((1221 < date || date < 121), 'capricorn')

  return astroMap.get(true) || false;
}
```

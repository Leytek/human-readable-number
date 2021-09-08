module.exports = function toReadable (number) {
  const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundred = number / 100 | 0;
  const ten = (number - hundred * 100) / 10 | 0;
  const units = (number - hundred * 100 - ten * 10);
  let result = '';
  if (hundred) result += nums[hundred] + ' hundred ';
  if (ten > 1) result += tens[ten] + ' ';
  else if (ten === 1) return result += nums[units + 10];
  if (units) return result += nums[units];
  if (result) return result.trim();
  return nums[0];
}

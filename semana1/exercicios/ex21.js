function calculate(string, num1, num2) {
  switch (string) {
    case 'soma':
      console.log(num1 + num2);
      break;
    case 'subtrai':
      console.log(num1 - num2);
      break;
    case 'multiplica':
      console.log(num1 * num2);
      break;
    case 'divide':
      console.log(num1 / num2);
      break;
    default:
      break;
  }
}

calculate('soma', 5, 3);
calculate('subtrai', 5, 3);
calculate('multiplica', 5, 5);
calculate('divide', 21, 7);

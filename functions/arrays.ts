export function shuffleNumbers(elements: any[]): any[] {
  return elements
    .map((value) => ({ value, random: Math.random() }))
    .sort((obj1, obj2) => obj1.random - obj2.random)
    .map((obj) => obj.value);
}

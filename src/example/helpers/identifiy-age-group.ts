
export function identifyAgeGroup(name:string,age:number): string {
    if (age >= 18) {
      return `${name} (A)`; 
    } else {
      return `${name} (M)`; 
    }
  }
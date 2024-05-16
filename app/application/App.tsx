import { Heading1 } from "lucide-react";

interface T {
  Element : any,
  Not: boolean

}

class Eelement{

  butom(){
    return(
      <button> Yes</button>
    )
  }
}



export default class Application extends Eelement implements T {
  Element: string;
  Not: boolean = false;

  constructor(X:any, T:any) {
    super();
    this.Not = X.Not;
    this.Element = X.Element;
  }

  NotFound() {
    return <h1> Nof fund </h1>;
  }

  incrmint() {}

  Pages() {}
}


const nu= new Application(true,'dfdf')

nu.incrmint()
console.log(nu.butom())
const animal: string = "bird";
const animals: string[]  = ["bird", "cat", "lion"];
const age: number = 45;
const isOpen: boolean= false;
const sum = ( tal1: number, tal2:number) : number => tal1 + tal2;
const sayHello = (name: string) : void => { console.log(`Hej ${name}`)}

const room: Object = {
    name:"Stora konferensen",
    seats:50,
    dropInAvailable:false,
    hourlyFee:350
}

console.log(room);

// Enum


enum Color { Red='Du måste stanna', Yellow='Kör om du inte hinner stanna!', Green='Kör så det ryker!' };


const trafficLight = (color: Color)=>{

console.log(color)
}
 
 trafficLight(Color.Red)

 const getPersonList = (person:Person) : string =>{
    return Person.innerHTML= `<ul>
    <li><b>Förnamn:</b> ${person.firstname}</li>
   <li><b>Efternamn:</b> ${person.lastname}</li>
    <li><b>Födelseår:</b> ${person.yearOfBirth}</li>
    <li><b>Man/kvinna:</b> ${person.isFemale ? "Kvinna" : "Man"}</li>
     
    </ul> `;
  }
 

// const personHTML: string = getPersonList("Jonatan","HAllenberg", 1987, false)
 console.log(getPersonList)

 const Jonatan: Person ={
    firstname: "Jonatan",
    lastname: "Hallenberg",
    yearOfBirth: 1987,
    isFemale:false
    } 
 
 const renderHTML = (html: string): HTMLElement => {
     const el: HTMLElement= div ;
     el.innerHTML=html
     return el }
     
     renderHTML(getPersonList(Jonatan))
 

//Interface

//  const getPersonList = (person:Person) : string =>{
//    return `<ul>
//    <li><b>Förnamn:</b> ${person.firstname}</li>
//   <li><b>Efternamn:</b> ${person.lastname}</li>
//    <li><b>Födelseår:</b> ${person.yearOfBirth}</li>
//    <li><b>Man/kvinna:</b> ${person.isFemale ? "Kvinna" : "Man"}</li>
    
//    </ul> `;
//  }


interface Person  {
    firstname: string,
     lastname:string,
      yearOfBirth:number, 
      isFemale:boolean
}

// const Jonatan: Person ={
//     firstname: "Jonatan",
//     lastname: "Hallenberg",
//     yearOfBirth: 1987,
//     isFemale:false
//     } 

//     console.log(getPersonList(Jonatan))

    //Array / Funktion / Interface

    interface ExamResult {
        studentId: number,
        score:number,

    }

    const examResults:ExamResult[]=[
        {
            studentId:12,
            score: 75
        },
        {
            studentId:15,
            score: 40
        },
        {
            studentId:18,
            score: 90
        }
    ]

    const  getPassedExams = ( examResults:ExamResult[] ) : ExamResult[] => examResults.filter((examResult:ExamResult)=> examResult.score > 50);
    console.log(getPassedExams (examResults));

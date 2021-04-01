// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//pAequor constructor
const pAequorFactory = (number, dnaBases) =>{
  let pAequorObj = {
    specimenNum:number,
    dna:dnaBases
    ,
    mutate () {
      let randomIndex = Math.floor(Math.random() * 15);
      let mutateBase = returnRandBase();
      while(mutateBase === this.dna[randomIndex]){
          mutateBase = returnRandBase();
      };
      this.dna[randomIndex] = mutateBase;
    },
    compareDNA (altPAequorObj) {
      const totalBases = this.dna.length;
      let commonBases = 0;
      this.dna.forEach(base => {
        if(this.dna[this.dna.indexOf(base)] === altPAequorObj.dna[this.dna.indexOf(base)]){
          commonBases ++;
        } 
      });
      const percentOfCommon = Math.round((commonBases/totalBases)*100)
      console.log(`specimen #${this.specimenNum} and specimen #${altPAequorObj.specimenNum} have ${percentOfCommon}% DNA in common`)
    },
    willLikelySurvive () {
      const totalBases = this.dna.length;
      let cGCount = 0;
      this.dna.forEach(base => {
        if(this.dna[this.dna.indexOf(base)] === 'C'||this.dna[this.dna.indexOf(base)] === 'G'){
          cGCount ++;
        }
      }); 
      if((cGCount/totalBases) >= .6) {
        return true;
      } else {
        return false;
        };
    }
  }
  return pAequorObj;
}

//create survivable organisms
const groupOfOrganisms = (numberOfOrganisms) => {
  let survivableOrganisms = [];
  //species Numberer
  let i = 0;
  let organism = pAequorFactory(i, mockUpStrand());
   while(survivableOrganisms.length < numberOfOrganisms){
     if(organism.willLikelySurvive() === true){
       survivableOrganisms.push(organism);
     }; 
   i++;
   organism = pAequorFactory(i, mockUpStrand());
  };
  return survivableOrganisms;
}

//create 30 organisms for the team
 let pAequorTestSubjects = groupOfOrganisms(30);


//dna constructions for testing
let testDna1 = pAequorFactory(1, mockUpStrand());
let testDna2 = pAequorFactory(2, mockUpStrand());
let testDna3 = pAequorFactory(3, mockUpStrand());
let testDna4 = pAequorFactory(4, mockUpStrand());

//mutation tests
// console.log('This is the unmutated dna ' + testDna1.dna);
//  testDna1.mutate();
//  console.log('This is the   mutated dna ' + testDna1.dna);
//  testDna1.mutate();
//  testDna1.mutate();
//  testDna1.mutate();
//  console.log('This is multi mutated dna ' + testDna1.dna);

//compare tests
// console.log('this is the dna for testdna1 ' + testDna1.dna);
// console.log('this is the dna for testdna2 ' + testDna2.dna);
// testDna1.compareDNA(testDna2);

//survival tests
// console.log('this is the dna for testdna1 ' + testDna1.dna);
// console.log("testDna1 will likely survive:" + testDna1.willLikelySurvive());
// console.log('this is the dna for testdna2 ' + testDna2.dna);
// console.log("testDna2 will likely survive:" + testDna2.willLikelySurvive());
// console.log('this is the dna for testdna3 ' + testDna3.dna);
// console.log("testDna3 will likely survive:" + testDna3.willLikelySurvive());
// console.log('this is the dna for testdna4 ' + testDna4.dna);
// console.log("testDna4 will likely survive:" + testDna4.willLikelySurvive());

//Group of organisms tests
//  console.log(pAequorTestSubjects);
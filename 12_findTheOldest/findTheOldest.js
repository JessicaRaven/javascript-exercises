const findTheOldest = function(people) {
    let date= new Date();
    let year=date.getFullYear();
    people.sort((a,b)=>{
        if('yearOfDeath' in a && 'yearOfDeath' in b){
            return (b.yearOfDeath-b.yearOfBirth)-(a.yearOfDeath-a.yearOfBirth);
        }
        else if (! 'yearOfDeath' in a && 'yearOfDeath' in b){
            //let date = date();
            //let year=date.getFullYear();
            return ((b.yearOfDeath-b.yearOfBirth)-year);
        }
        else if ('yearOfDeath' in a && ! 'yearOfDeath' in b){
            //let date = date();
            //let year=date.getFullYear();
            return (year-(a.yearOfDeath-a.yearOfBirth));
        }
        else{
            //let date = date();
            //let year=date.getFullYear();
            return ((year-b.yearOfBirth)-(year-a.yearOfBirth));
        }
    }
    )
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;

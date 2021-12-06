const students = [
    {name: "markku", score: 99}, {name: "karoliina", score: 58},
    {name: "susanna", score: 69}, {name: "benjamin", score: 77},
    {name: "isak", score: 49}, {name: "liisa", score: 89},
];

let highest = 0;
let lowest = 100;
let avg = 0;
//${students[i].score}

for(const key in students){

    const value = students[key].score;
    const howLong= students[key].length;

    avg = (avg + students[key].score) / howLong;

    if(highest<value){

        highest = value;

    }

    if (lowest > value){

        lowest=value;

    }

}

console.log(highest);
console.log(lowest);
console.log(avg);
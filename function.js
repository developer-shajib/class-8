
//Create a complete fifth class students array and object data structure and find their result with gpa, grade, cgpa and final result  



let findgpa= (name,stu_class,roll,subject)=> {

//find result with gpa

let getgpa =(mark)=>{

let gpa = 0;
if(mark >= 0 && mark < 33){
    gpa = 0;
}else if(mark>=33 && mark<40){
    gpa= 1;
}else if(mark>=40 && mark<50){
    gpa= 2;
}else if(mark>=50 && mark< 60){
    gpa= 3;
}else if(mark>=60 && mark< 70){
    gpa= 3.5;
}else if(mark>=70 && mark< 80){
    gpa= 5;
}else if(mark>=80 && mark <= 100){
    gpa= 5;
}else{
    gpa = "Invalid";
}
 return gpa;

}


//find result with grade

let getgrade =(mark)=>{

let grade = "";
if(mark >= 0 && mark < 33){
    grade = "F";
}else if(mark>=33 && mark<40){
    grade= "D";
}else if(mark>=40 && mark<50){
    grade="C";
}else if(mark>=50 && mark< 60){
    grade="B";
}else if(mark>=60 && mark< 70){
    grade= "A-";
}else if(mark>=70 && mark< 80){
    grade= "A";
}else if(mark>=80 && mark <= 100){
    grade= "A+";
}else{
    grade = "Invalid";
}
 return grade;

}

//find result with grade
let total = getgpa(subject.bn) + getgpa(subject.en) + getgpa(subject.math) + getgpa(subject.sc);

let result="";
let cgpa = "";
if(getgpa(subject.bn)== 0 || getgpa(subject.en)== 0 || getgpa(subject.math)== 0 || getgpa(subject.sc)== 0 ){
    result = "Fail"
    cgpa = "0"
}
else{
    result= "Pass";
    cgpa = total / 5;
    
}


console.log(`
Name    : ${name}
Class   : ${stu_class}
Roll    : ${roll}
========================================
Subject---->Marks-->GPA---->Grade
Bangla----> ${subject.bn}----->${getgpa(subject.bn)}------>${getgrade(subject.bn)}
English---> ${subject.en}----->${getgpa(subject.en)}------>${getgrade(subject.en)}
Math------> ${subject.math}----->${getgpa(subject.math)}------>${getgrade(subject.math)}
Science---> ${subject.sc}----->${getgpa(subject.sc)}------>${getgrade(subject.sc)}
================================================
     Result = ${result} and CGPA = ${cgpa}

`);

};



stuInfo.forEach((data)=>{
    findgpa(data.name,data.class,data.roll,data.subject)
});
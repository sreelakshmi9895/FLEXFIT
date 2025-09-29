// create student class with (id,name,course,fees)
class Students{
constructor(id,sname,course,fees){
    this.studId=id
    this.studName=sname
    this.studCourse=course
    this.studFees=fees
}
display(){
    console.log(`
        -------------STUDENT DETAILS------------
        ID:${this.studId}
        NAME:${this.studName}
        COURSE:${this.studCourse}
        FEES:${this.studCourse}
        `);
}
}
const stud1 = new Students(101,"ADITHYA","MEARNSTACK",45000)
stud1.display()
const stud2 = new Students(101,"DEVIKA","PYTHON",50000)
stud2.display()

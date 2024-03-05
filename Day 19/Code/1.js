const student ={
    name : "Ram",
    Roll_no : 1,
    eng :10,
    sci : 20,
    getAvg()
    {
        console.log((this.eng+this.sci)/2);
    }
}

student.getAvg();
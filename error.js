function afterTryCatch() {
    try {
        let obj = undefined;
        console.log(obj.b);
        console.log("you'll not see this")
    } catch (error) {
        console.log("I caught an execption");
    }
    console.log("My application is still working");
}
afterTryCatch();
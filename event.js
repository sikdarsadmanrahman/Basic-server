const School =  require('./School');

const school = new School();

//register a listener for bellRing event
school.on("bellRing", (name, reason) => {
    console.log(`We need to run! because ${name} is ${reason} yet`);
});
 
school.startPeriod();
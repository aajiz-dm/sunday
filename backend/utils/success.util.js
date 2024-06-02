import chalk from "chalk";

const DBSuccessutilis = (param)=>{
    console.log(chalk.bgGreen(`DB connected `));
console.log(chalk.bgYellow(`Host : ${param.connection.host}`));
console.log(chalk.bgBlue(`Name  : ${param.connection.name}`));

};


const DBErrorutilis = (param)=>{

    console.log(chalk.bgRed(`DB connection failed \n`));
    console.log(chalk.red(param));
    // console.log(chalk.bgBlue(`Name  : ${param.connection.name}`));
    
    };
    


export{DBSuccessutilis,DBErrorutilis}
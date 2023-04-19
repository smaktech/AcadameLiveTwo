// // const winston = require('winston');
// // const winstonRotator = require('winston-daily-rotate-file');

// // // const consoleConfig = [
// // //   new winston.transports.Console({
// // //     'colorize': true
// // //   })
// // // ];


// // // const createLogger = winston.createLogger({
// // //   'transports': consoleConfig
// // // });

// // const logConfiguration = {
// //   'transports': [
// //       new winston.transports.Console()
// //   ]
// // };

// // const createLogger = winston.createLogger(logConfiguration);

// // const successLogger = createLogger;
// // successLogger.add(winstonRotator, {
// //   'name': 'access-file',
// //   'level': 'info',
// //   'filename': './logs/access.log',
// //   'json': false,
// //   'datePattern': 'yyyy-MM-dd-',
// //   'prepend': true
// // });

// // const errorLogger = createLogger;
// // errorLogger.add(winstonRotator, {
// //   'name': 'error-file',
// //   'level': 'error',
// //   'filename': './logs/error.log',
// //   'json': false,
// //   'datePattern': 'yyyy-MM-dd-',
// //   'prepend': true
// // });

// // module.exports = {
// //   'successlog': successLogger,
// //   'errorlog': errorLogger
// // };

// const { createLogger, format, transports } = require('winston');
// let mydate = new Date();
// let newFilename ="AcadameAPI "+ mydate.getFullYear() + "-" + mydate.getMonth() + "-" + mydate.getDate() + ".log";

// module.exports = createLogger({
// transports:
//     new transports.File({
//     filename: 'logs/'+newFilename,    
//     format:format.combine(
//         format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
//         format.align(),
//         //format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
//         format.printf(info => `${[info.timestamp]} - ${info.message}`),
//     )}),
// });
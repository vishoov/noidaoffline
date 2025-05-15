
// // let days =400;

// // function getyear(days){

// //     let years = Math.floor(days/365); // year =1
// //     let left_days =parseInt(days%365); // left_days=35

// //     let months = parseInt(left_days/30); // month =1

// //     let left_days_afterMonth = parseInt(left_days%30);

// //     let remaining_days = parseInt(left_days_afterMonth%30);

// //     console.log(`years:${years}, months:${months}, days:${remaining_days}`);

// // }

// // getyear('400')

// //29/02/2024

// function isValidDate(day, month, year){
//     if(month<1 || month >12){
//         return 'Invalid';
//     }

//     if(day<1 || day>31){
//         return "Invalid";
//     }

//     const day31 = [1, 3, 5, 7, 8, 10, 12];
//     const day30 = [4, 6, 9, 11];

//     if(month ===2){
//         const isLeapYear = (year%4===0 && year%100!==0) || (year%400===0);

//         if(isLeapYear && day>29){
//             return "Invalid";
//         }
//         if(!isLeapYear && day>28){
//             return "Invalid";
//         }



//     }

//     else if(day30.includes(month) && day>30){
//         return "Invalid";
//     }
//     else if(day31.includes(month) && day>31){
//         return "Invalid"
//     }

//     return "Valid";
// }


// let day=29
// let month=2
// let year=2024

// console.log(isValidDate(day, month, year));


let greatest=""
likes>comments?(likes>shares?greatest="likes":greatest="shares"):
(comments>shares?greatest="comments":greatest="likes")
switch(greatest){
	case "likes":console.log("likes");			
					break;

     case "comments":console.log("comments");
	 					break;
	 case "shares":console.log("shares")
	 				break;
	default:
    console.log("all are equal")
											

}
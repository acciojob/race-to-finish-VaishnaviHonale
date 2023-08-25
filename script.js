window.promises = [];
let pro1=new Promise((reslove,reject)=>{
	setTimeout(()=>{
		reslove("Pro1");
	},Math.floor(Math.random()*5000)+1000);
});
let pro2=new Promise((reslove,reject)=>{
	setTimeout(()=>{
		reslove("pro2");
		
	},Math.floor(Math.random()*5000)+1000);
});
let pro3=new Promise((reslove,reject)=>{
	setTimeout(()=>{
		reslove("pro3");
		
	},Math.floor(Math.random()*5000)+1000);
});
let pro4=new Promise((reslove,reject)=>{
	setTimeout(()=>{
		reslove("pro4");
		
	},Math.floor(Math.random()*5000)+1000);
});
let pro5=new Promise((reslove,reject)=>{
	setTimeout(()=>{
		reslove("pro5");
		
	},Math.floor(Math.random()*5000)+1000);
});
const myArray=[pro1,pro2,pro3,pro4,pro5];
promise.any(myArray).then((result)=>{
	document.getElementById("output").innerText=result;
});


// Do not change the code above this
// add your promises to the array `promises`

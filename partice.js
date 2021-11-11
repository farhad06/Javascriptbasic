/*//object creation technique
//using instance of object
var emp=new Object();
emp.id=101;
emp.name="Sham";
emp.sal=20000;
document.write(emp.id+" "+emp.name+" "+emp.sal+"<br>");
//using object consrtucor
function emp1(id,name,sal){
	this.id=id;
	this.name=name;
	this.sal=sal;
}
e=new emp1(102,"Rohit",15000);
document.write(e.id+" "+e.name+" "+e.sal+"<br>");
//using object literals
emp3={id:103,name:"Virat",sal:12000};
document.write(emp3.id+" "+emp3.name+" "+emp3.sal+"<br><br><br>");
//JavaScript Array Creation
//using array literal
var lan=["java","JavaScript","jQuery"];
for(var i=0;i<lan.length;i++){
	document.write(lan[i]+"<br>")
}
//using new keyword
var num=new Array();
num[0]=10;
num[1]=20;
num[2]=30;
num[3]=40;
for(var i=0;i<num.length;i++){
	document.write(num[i]+"<br>")
}
//using Array constructor
var pla=new Array("Rohit","Dhawan","Rahul");
for(var i=0;i<pla.length;i++){
	document.write(pla[i]+"<br>")
}
//javaScript String creation
//method 1
var nam="Hello JavaScript";
document.writeln(nam+"<br>");
//method 2
var an=new String("Kolkata");
document.write(an);
//BOM(Browser Object Model)
//window object
//alert()
//window.alert("Have A Nice Day!!!");
//confirm
//window.confirm("Are U Sure??");
//prompt
//open()-->open a new window
//close()-->close the current window
//setTimeout()*/

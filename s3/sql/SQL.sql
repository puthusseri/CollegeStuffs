//Create Table

create table Client_master_59(
	Client_no varchar(20) primary key check(Client_no in 'C%'),
	Name varchar(20) not null,
	Address1 varchar(20),
	Address2 varchar(20),
	City varchar(20),
	Pincode number,
	State varchar(20),
	Bal_due number
	);
	
create table Product_master_59(
	Product_no varchar(20) primary key check(Product_no in 'P%'),
	Description varchar(20) not null,
	Profit_percent number,
	unit_measure varchar(20),
	Qty_on_hand number,
	Recorder_lvl number,
	Sell_price number,
	Cost_price number
	);

create table Salesman_master_59(
	Salesman_no varchar(20) primary key check(Salesman_no in'S%'),
	Salesman_name varchar(20) not null, 
	Address1 varchar(20) not null, 
	City varchar(20), 
	Pincode number, 
	Sal_amt number not null check(Sal_amt<>0),
	Tgt_to_get number not null check(Tgt_to_get <>0),
	Tgt_sales number not null,
	Remarks varchar(20)
	);


create table Sales_order_59(
	Order_no varchar(20) primary key check(Order_no in'O%'),
	Order_date date,
	Client_no varchar(20) references Client_master_59(Client_no),
	Dely_addr char,
	Salesman_no varchar(20), 
	Dely_type char default('F'),
	Billed_yn char,
	Dely_date date,
	Order_status varchar(20) check(Order_status in('In Process','Cancelled','Fulfilled','Cancelled'))
	);


create table Sales_order_details_59(
	Order_no varchar(20) references Sales_order_59(Order_no),
	Product_no varchar(20) references Product_master_59(Product_no),
	Qty_ordered number,
	Qty_number number,
	Product_rate number
	);



drop table Sales_order_details_59;
drop table Sales_order_59;
drop table Salesman_master_59;
drop table Product_master_59;
drop table Client_master_59;



insert into Client_master_59 values('C00001','Ivan Bayross','Wandon','Worli','Mumbai',450005,'Maharashtra',15000);
insert into Client_master_59 values('C00002','Vandana Saitwa','Don Street','Bandra','Madras',780001,'Tamil Nadu',0);
insert into Client_master_59 values('C00003','pramadajagust','Mandon','Dadar','Mumbai',450007,'Maharashtra',5000);
insert into Client_master_59 values('C00004','Basu navindgi','Jerome','Juhu','Mumbai',450009,'Maharashtra',0);
insert into Client_master_59 values('C00005','Ravisreedharan','Dadar','Dadra','Delhi',100003,'Delhi',2000);
insert into Client_master_59 values('C00006','Rukmini','Rourk','Bandra','Mumbai',450002,'Maharashtra',0);



insert into Product_master_59 values('P00001','1.44 floppies',5,'piece',100,20,525,500);
insert into Product_master_59 values('P03453','monitors',6,'piece',10,3,12000,11280);
insert into Product_master_59 values('P45789','mouse',5,'piece',20,5,1050,1000);
insert into Product_master_59 values('P44783','keyboards',5,'piece',100,20,3150,3050);
insert into Product_master_59 values('P45123','cd drive',2,'piece',10,3,5250,5100);
insert into Product_master_59 values('P35412','540hdd',2.5,'piece',10,3,8400,8000);



insert into Salesman_master_59 values('S00001','Kiran','a/14','worli',450001,'bombay',3000,100,50,'good');
insert into Salesman_master_59 values('S00002','Maneesh','j-65','nariman',450001,'bombay',3000,200,100,'good');
insert into Salesman_master_59 values('S00003','Ravi','p-7','Bandra',400001,'bombay',3000,200,100,'good');
insert into Salesman_master_59 values('S00004','Ashish','a/5','juhu',400001,'bombay',3000,200,150,'good');


insert into Sales_order_59 values('O19001','12-jan-96','C00001','wandon','S00001','F','N','20-jan-96','in process');
insert into Sales_order_59 values('O19002','25-jan-96','C00002','don street','S00002','P','N','27-jan-96','cancelled');
insert into Sales_order_59 values('O46865','18-feb-96','C00003','mandon','S00003','F','Y','20-feb-96','fulfilled');
insert into Sales_order_59 values('O19003','03-apr-96','C00001','jerome','S00001','F','Y','07-apr-96','fulfilled');
insert into Sales_order_59 values('O46866','20-may-96','C00004','dadar','S00002','P','N','22-may-96','cancelled');
insert into Sales_order_59 values('O19008','24-may-96','C00005','rourk','S00004','F','N','26-jan-96','in process');





insert into Sales_order_details_59 values('O19001','P00001',4,4,525);
insert into Sales_order_details_59 values('O19002','P00001',10,0,525);
insert into Sales_order_details_59 values('O46865','P00001',10,10,525);
insert into Sales_order_details_59 values('O46866','P03453',4,4,1050);
insert into Sales_order_details_59 values('O19003','P03453',2,2,1050);
insert into Sales_order_details_59 values('O19008','P00001',10,5,525);








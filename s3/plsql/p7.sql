SET SERVEROUTPUT ON;
DECLARE 
	n varchar(6);
	new_row product_master_59%rowtype;
	temp number(5);
	--blaa EXCEPTION;
BEGIN
	n := '&n';
	select * into new_row from product_master_59 where product_no = n;
	temp := new_row.Cost_price;
	if temp < 3000
	then	
		DBMS_OUTPUT.PUT_LINE('Old cost price' || temp);
		temp := temp -200;
		DBMS_OUTPUT.PUT_LINE('New cost price' || temp);
		update product_master_59 set Cost_price = temp where product_no =n;
	END if;
	--raise blaa;
	
	EXCEPTION
		--when blaa
		--then 
		--	DBMS_OUTPUT.PUT_LINE('Blaa');
		when no_data_found
		then	
			DBMS_OUTPUT.PUT_LINE('No such data found');
		when others
		then
			DBMS_OUTPUT.PUT_LINE('Other all exception');
END;
/

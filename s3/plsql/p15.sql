SET SERVEROUTPUT ON;
DECLARE 
	
	new_row product_master_59%rowtype;
	cursor product_cursor is select * from product_master_59;
BEGIN
	
	open product_cursor;
	loop
	fetch product_cursor into new_row;
		exit when new_row%notfound;
		DBMS_OUTPUT.PUT_LINE(product_cursor.product_no||' '||product_cursor.description||' '||product_cursor.profit_percent||' '||product_cursor.unit_measure||' '||product_cursor.qty_on_hand||' '||product_cursor.RECORDER_LVL||' '||product_cursor.SELL_PRICE||' '|| product_cursor.COST_PRICE);
	end loop;
	close product_cursor;
	DBMS_OUTPUT.PUT_LINE('Blaa');
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

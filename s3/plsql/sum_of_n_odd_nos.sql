SET SERVEROUTPUT ON;
DECLARE
	n number(2);
	i number(2);
	total number(5) := 1;
	display_text varchar(20) := 'SUM OF ODD NOS :';
	
	
BEGIN
	n := &n; --reading the value
	FOR i in 1..n
	LOOP
		dbms_output.put_line(total);
		total := total + 2;
	END LOOP;
	dbms_output.put_line(display_text);
	dbms_output.put_line(total);
END;
/
	
	

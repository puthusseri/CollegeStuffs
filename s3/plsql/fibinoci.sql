set serveroutput on;
DECLARE
	i number(2);
	n number(2);
	a number(2) := 0;
	b number(2) := 1;
	total number(2) := b;
BEGIN
	n := &n;
	
	FOR i in 1..n
	LOOP
		dbms_output.put_line(total);
		total := a+b;
		a := b;
		b := total;
		
	END LOOP;
END;
/


SET SERVEROUTPUT ON;
DECLARE
	fact number(3) := 1;
	i number(2) := 1;
	n number(2);
BEGIN
	n := &n;
	FOR i in 1..n
	LOOP
		if i=n 
		THEN
			fact := fact*n;
			EXIT;
		ELSE
			fact := fact*i;
		END IF;
	END LOOP;
	dbms_output.put_line(fact);
END;
/

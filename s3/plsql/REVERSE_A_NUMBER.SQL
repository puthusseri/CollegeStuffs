--REVERSE A NUMBER
SET SERVEROUTPUT ON;
DECLARE
	n number(5);
	reverse number(5) := 0;
	reminder number(5);
	
BEGIN
	n := &n;
	WHILE n>0
	LOOP
		reminder := mod(n,10);
		reverse := (reverse*10) + reminder;
		n := trunc(n/10);
	END LOOP;
	dbms_output.put_line('Reverse number :'||reverse);
END;
/
		
		
	

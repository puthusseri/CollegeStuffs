SET SERVEROUTPUT ON;
DECLARE
	a number(2);
	b number(2);
	c number(2);
	largest number(2);
	output varchar(50) := 'The largest number :';
	
BEGIN
	
	a := &a;
	b := &b;
	c := &c;
	IF a>b
	THEN
		IF a>c
		THEN
			largest := a;
		ELSE
			largest := c;
		END IF;
	ELSE
		IF b>c
		THEN
			largest := b;
		ELSE
			largest := c;
		END IF;
	END if;
	dbms_output.put_line(output);
	dbms_output.put_line(largest);
	
END;
/

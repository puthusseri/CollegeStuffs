set serveroutput on;
DECLARE
	n number(5);
	rev number(2);
	
BEGIN
	n := &n;
	select reverse(to_char(n)) into rev from dual;
	dbms_output.put_line(rev);		
END;
/

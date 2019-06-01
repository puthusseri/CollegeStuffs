set serveroutput on;
DECLARE
	n number(2);
	n_rev number(2);
	
BEGIN
	string := &string;
	select reverse(to_char(n)) into n_rev from dual;
	dbms_output.put_line(n_rev);		
END;
/

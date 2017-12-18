let rec fib a =
	match a with
	| 0 -> 1
	| 1 -> 1
	| x -> (fib (x - 1)) + (fib (x - 2));;

let rec fact a =
	if (Int64.compare a Int64.one) <= 0 then Int64.one
	else Int64.mul a (fact (Int64.sub a Int64.one));;

let aa = 10	in
let bb = 15 in
begin
	print_string "Test fib of ";
	print_int aa;
	print_newline ();
	print_int (fib aa);
	print_newline ();
	print_string "test fact of ";
  print_string (Int64.to_string bb);	
	print_newline ();
	print_string (Int64.to_string (fact bb));
	print_newline ()
end;;

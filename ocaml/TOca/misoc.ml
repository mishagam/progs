let rec sumsq n = 
	match n with
		| 0 -> 0
		| n -> n*n + sumsq (n - 1);;

let rec sumn n = 
	match n with
		| 0 -> 0
		| n -> n + sumn (n - 1);;

let aa = 108	in
begin
	print_string "aa = ";
	print_int aa;
	print_newline ();
	print_string "sn*sn - sumsq aa = ";
	print_int (((sumn aa) * (sumn aa)) - (sumsq aa));
	print_newline ()
end;;

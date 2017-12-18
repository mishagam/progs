open Big_int;;
open Printf;;

(* work with big integer *)

let rec fib a =
	match a with
	| 0 -> 1
	| 1 -> 1
	| x -> (fib (x - 1)) + (fib (x - 2));;

let rec fact a =
	if (Int64.compare a Int64.one) <= 0 then Int64.one
	else Int64.mul a (fact (Int64.sub a Int64.one));;

let rec factbi a =
  if (Big_int.compare_big_int a Big_int.unit_big_int) <= 0 then Big_int.unit_big_int
  else Big_int.mult_big_int a (factbi (Big_int.pred_big_int a));;

let mbigint n =
  begin
    let nbi = (Big_int.big_int_of_int n) in
    let fact = factbi nbi in
    let sbi = Big_int.string_of_big_int fact in 
    printf "\n fact bi of %d = %s " n sbi    
  end;;

(* XXX - надо бы подсчитать е с большой точностью используя big_int *)

let aa = 10	in
let bb = (Int64.of_int 15) in
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
	print_newline ();
    mbigint 200; 
end;;

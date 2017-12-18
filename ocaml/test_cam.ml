(* calculate factorial of n *)
let rec fact n = match n with
  | 0 -> 1
  | 1 -> 1
  | _ -> n * (fact (n - 1));;

let rec fib n = 
  match n with
    | 0 | 1 -> 1
    | _ -> fib (n - 1) + fib (n - 2);;

print_int (fact 6);
print_string "\nNow fib\n";
print_int (fib 8);;



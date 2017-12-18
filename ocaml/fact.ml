let rec fact n = 
  match n with
    | 0 | 1 -> 1
    | _ -> n * fact (n - 1);;


let i = 9 in
let fi = fact i in
print_string "Factorial ";
print_int i;
print_string " = ";
print_int fi;
print_string "\nDone\n";;

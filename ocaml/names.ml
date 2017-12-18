open Printf;;
open Str;;
open String;;

let odd n = 
  (n mod 2) == 1;;

let even n = 
  (n mod 2) == 0;;

let readnames fileName = 
  begin
    let fin = open_in fileName in
    let lineraw = input_line fin in
    let ln = length lineraw in
    let line = sub lineraw 1 (ln - 2) in (* removing first and last quotes *)    
    let nml = Str.split (regexp "\",\"") line in    
    let sortedNames = List.sort compare nml in
    printf "\n list cnt = %d\n"  (List.length sortedNames);
    for i = 1 to 20 do
      print_string " ";
      print_string (List.nth sortedNames i)
    done;
    sortedNames;
  end;;

let charCode c = (Char.code c) - (Char.code 'A') + 1;;

let rec countChars s = 
  match s with 
    | "" -> 0
    | ss -> (charCode ss.[0]) + countChars (Str.string_after ss 1);; 

let rec prob22 sm idx liNames = 
  match liNames with 
    | [] -> sm
    | h :: t ->
      let ssm = (idx * countChars h) + sm in 
      prob22 ssm (idx+1) t;;
    
let rec sum1 sm n = 
  match n with
    | 0 -> sm
    | v -> sum1 (sm + 1) (n - 1);;

let liste l = 
  match l with
    | y::_ when even y -> (6,6)
    | y::_ when y > 5 -> (2,2)
    | y::_ as whole -> (3, List.hd whole)
    | [] -> (4,4);;

let main x =
  let (a, b) = liste [2; 11] in
  printf "a,b = %d %d " a b;
  let lnms = readnames "names.txt" in
  let score = prob22 0 1 lnms in
  printf "\n Score = %d" score;
  printf "\n sum1 1000000000 = %d" (sum1 0 1000000000);;

main 0;;

open Printf;;
open Str;;
open String;;

let rec sum1 sm n = 
  match n with
    | 0 -> sm
    | _ -> sum1 (sm + 1) (n - 1);;

let rec sum2 n = 
  match n with
    | 0 -> 0
    | n -> 1 + (sum2 (n - 1));;

let main n =
  begin
  printf "sum1 %d = %d\n" n (sum1 0 n);
  printf "sum2 %d = %d\n" n (sum2 n)
  end;;

(* on Linux *)
(* ocamlopt - 2000000 works, 8000000 sum2 fails *)
(* ocamlc -    200000 works,  600000 sum2 fails *)
main 200000;;

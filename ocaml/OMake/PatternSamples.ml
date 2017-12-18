let matf a = match a with
| 0 -> "Zero"
| n when n mod 2 == 0 -> "Even"
| _ -> "odd";;

let matl = function
	| [] -> "Empty"
	| n :: [] when n mod 3 = 0 -> "onenum mod 0" 
	| n :: [] when n mod 3 = 1 -> "onenum mod 1" 
	| n :: [] when n mod 3 = 2 -> "onenum mod 2" 
	| n :: t when n mod 10 = 1 -> "number ends 1" 
	| a :: b :: [] when a = b -> "Same start"
	| _ -> "Other list";;
 
let matt = function  (* work with tuples *)
| (_ , 4) -> "ends 4"
| (3, _) -> "starts 3"
| (a, b) -> (string_of_int a) ^ " with " ^ (string_of_int b);;

let mats s = match s with
| "ab" -> "start ab"
| _ -> "Other string";;

open Genlex;;

type mtyp = Const of int | Sum of mtyp * mtyp | Dif of mtyp * mtyp | If of mtyp * mtyp * mtyp | Var of string;;

let mt = Const 45;;
let ms = Sum (mt, mt);;

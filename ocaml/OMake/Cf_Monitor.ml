(* Codeforces 16C monitor done *)

open String;;
open Int64;;

(* you can use either gr or rdln but not both *)
let gr () = Scanf.scanf " %d" (fun i -> i);;
let grl () = Scanf.scanf " %Ld" (fun i -> i);;
let rdln() = input_line stdin;;
(* let spli s = Str.split (Str.regexp " ") s;; *)
let printlisti li = List.iter (fun i -> (print_string " "; print_int i)) li;;
let printarri ai = Array.iter (fun i -> (print_string " "; print_int i)) ai;;
let debug = false;;

let rec gcd a b =
	if b > a then gcd b a
	else if b = Int64.zero then a
	else gcd b (Int64.rem a b);;

let main () =
	let a = grl() in
	let b = grl() in
	let x = grl() in
	let y = grl() in
	let cxy = gcd x y in
	let x = Int64.div x cxy in
	let y = Int64.div y cxy in
	if a < x or b < y then print_string "0 0\n"
	else
		let ca = Int64.div a x in
		let cb = Int64.div b y in
		let cab = min ca cb in
		begin
			print_string (Int64.to_string (Int64.mul x cab));
			print_string " ";
			print_string (Int64.to_string (Int64.mul y cab));
		end;;

main();;

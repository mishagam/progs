(* Codeforces 252B BoysGirls 253A *)

open Big_int;;
open List;;

(* you can use either gr or rdln but not both *)
let gr () = Scanf.scanf " %d" (fun i -> i);;
let grf () = Scanf.scanf " %f" (fun i -> i);;
let grl () = Scanf.scanf " %Ld" (fun i -> i);;
let rdln() = input_line stdin;;
(* let spli s = Str.split (Str.regexp " ") s;; *)
let printlisti li = List.iter (fun i -> (print_int i; print_string " ")) li;;
let printarri ai = Array.iter (fun i -> (print_int i; print_string " ")) ai;;
let debug = false;;

let rec printc s n =
	if n=0 then ()
	else  
	begin
	print_string s;
	printc s (n-1)
	end;;

let main () =
	let nb = gr() in
	let ng = gr() in
	begin
	if nb = ng then printc "GB" ng
	else if nb > ng then begin
		printc "BG" ng;
		printc "B" (nb-ng)
		end
	else begin
		printc "GB" nb;
		printc "B" (ng-nb)
		end;
		print_string "\n"
		end;;
		

main();;
